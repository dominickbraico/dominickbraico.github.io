---
permalink: /projects/gps-ins-ekf/
title: "GPS-INS Extended Kalman Filter"
excerpt: "Sensor fusion for robust state estimation"
author_profile: true
---

# GPS-INS Extended Kalman Filter

**Duration:** Fall 2024 | **Role:** Individual Project | **Course:** Software Development for Mobile Robots

<video autoplay loop muted playsinline style="width: 100%; max-width: 800px; border-radius: 8px; margin-bottom: 20px;">
  <source src="/images/ekf_spedup_cropped.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Problem Statement

Accurate localization is critical for autonomous vehicles and mobile robots, but individual sensors have limitations: GPS provides absolute position but at low frequency (1-10 Hz) and is unreliable in urban canyons or indoor environments. Inertial Navigation Systems (INS) offer high-frequency measurements (100+ Hz) but accumulate drift over time. The challenge is to optimally combine these complementary sensors for continuous, accurate state estimation.

## Solution Overview

Implemented an Extended Kalman Filter (EKF) in Python to fuse GPS and INS data for robust 3D vehicle localization. The algorithm leverages GPS for absolute position correction and INS for high-rate motion propagation, achieving superior accuracy compared to either sensor alone while maintaining resilience to GPS outages.

---

## Technical Implementation

### State Estimation Framework

**State Vector (15 dimensions):**
```
x = [px, py, pz,          # Position (m)
     vx, vy, vz,          # Velocity (m/s)
     roll, pitch, yaw,    # Orientation (rad)
     bax, bay, baz,       # Accelerometer biases (m/s²)
     bgx, bgy, bgz]       # Gyroscope biases (rad/s)
```

**Sensor Models:**
- **INS (IMU)**: 3-axis accelerometer + 3-axis gyroscope at 100 Hz
- **GPS**: 3D position measurements at 5 Hz
- **Ground Truth**: High-accuracy motion capture system for validation

### Extended Kalman Filter Algorithm

**1. Prediction Step (IMU-driven, 100 Hz):**

Implemented nonlinear motion model using IMU measurements:
```python
# Rotation from body frame to world frame (using quaternions)
R_b2w = rotation_matrix(roll, pitch, yaw)

# Velocity update (remove gravity, correct for biases)
acc_world = R_b2w @ (acc_body - acc_bias) - [0, 0, 9.81]
velocity_new = velocity + acc_world * dt

# Position update (integrate velocity)
position_new = position + velocity * dt

# Orientation update (integrate angular velocity)
omega_corrected = gyro_body - gyro_bias
orientation_new = orientation + omega_corrected * dt
```

Computed Jacobian matrix F (15×15) for linearization around current state estimate. Updated error covariance matrix P using discrete-time Riccati equation:
```
P_predict = F * P * F^T + Q
```
where Q is the process noise covariance (tuned for IMU characteristics).

**2. Update Step (GPS-driven, 5 Hz):**

When GPS measurement available:
```python
# Measurement model: z = H*x + v (GPS measures position only)
H = [I_3x3, 0_3x12]  # Observation matrix (3×15)

# Innovation (measurement residual)
innovation = z_gps - H @ x_predict

# Kalman gain calculation
S = H @ P_predict @ H^T + R_gps  # Innovation covariance
K = P_predict @ H^T @ inv(S)      # Kalman gain

# State and covariance update
x_update = x_predict + K @ innovation
P_update = (I - K @ H) @ P_predict
```

**3. Bias Estimation:**

Included IMU biases in state vector to compensate for sensor drift. Biases estimated as random walk process with slow time constant (τ = 100s), allowing EKF to learn and correct for systematic errors.

### Noise Parameter Tuning

**Process Noise (Q matrix):**
- Position process noise: 0.01 m²/s³ (accounts for model uncertainty)
- Velocity process noise: 0.1 m²/s⁵
- Orientation process noise: 0.001 rad²/s³
- Bias random walk: 1e-7 (slow drift)

**Measurement Noise (R matrix):**
- GPS position noise: σ = 3 m (standard deviation, based on consumer GPS specs)
- Increased to σ = 10 m during simulated urban canyon conditions

Tuned parameters empirically by analyzing innovation statistics (should be zero-mean, white noise).

---

## Simulation Environment

**Test Trajectories:**
1. **Figure-8 path**: Constant velocity with varying curvature (tests orientation estimation)
2. **Stop-and-go**: Rapid acceleration/deceleration (tests velocity estimation)
3. **3D maneuver**: Climbing spiral trajectory (tests full 3D state estimation)

**Sensor Noise Models:**
- **IMU**: White Gaussian noise + slow-varying bias (σ_acc = 0.05 m/s², σ_gyro = 0.01 rad/s)
- **GPS**: Multipath errors (urban canyon: 5-10m), random dropouts (10% packet loss)

**Validation:**
- Compared EKF estimate against high-accuracy ground truth (motion capture, <1cm error)
- Computed RMSE (Root Mean Square Error) for position, velocity, and orientation

---

## Results & Performance

**Position Accuracy (RMSE over 120-second trajectory):**
- GPS only: 3.2 m
- INS only (dead reckoning): 15.8 m (drift accumulates rapidly)
- **EKF fusion: 1.4 m** (56% improvement over GPS alone)

**Velocity Estimation:**
- GPS differentiation (noisy): σ = 0.8 m/s
- **EKF estimate: σ = 0.15 m/s** (smoother, more accurate)

**GPS Outage Resilience:**
- Simulated 15-second GPS dropout (mimicking tunnel/urban canyon)
- EKF maintained <5m position error using INS propagation
- Rapid reconvergence (<2 seconds) after GPS reacquisition

**Computational Performance:**
- Python implementation: 2-3 ms per filter update (100 Hz achievable)
- NumPy vectorization critical for matrix operations efficiency

---

## Technical Challenges & Solutions

**Challenge 1: Nonlinear Orientation Dynamics**
- **Problem:** Euler angles suffer from gimbal lock; rotation is highly nonlinear
- **Solution:** Implemented quaternion-based rotation representation internally; converted to Euler angles only for output; computed Jacobians using small-angle approximations

**Challenge 2: Filter Divergence**
- **Problem:** Initially, position error grew unbounded despite GPS updates
- **Solution:** Diagnosed via innovation analysis (innovations were not zero-mean); issue was process noise Q too small; increased Q by 10×, allowing filter to "trust" new measurements more

**Challenge 3: IMU Bias Estimation**
- **Problem:** Incorrect bias estimates caused systematic position drift
- **Solution:** Extended state vector to include biases; required longer initialization period (30s) for biases to converge; implemented bias reset mechanism if detected drift exceeded threshold

---

## Technologies & Tools

**Language:** Python 3.10
**Libraries:**
- NumPy 1.24 (matrix operations, linear algebra)
- SciPy 1.10 (special functions, optimization)
- Matplotlib 3.7 (trajectory visualization, error analysis)

**Key Algorithms:**
- Extended Kalman Filter (EKF)
- Quaternion algebra for rotations
- Discrete-time state-space propagation
- Cholesky decomposition for covariance matrix updates

---

## Key Learnings

- Deep understanding of probabilistic state estimation and sensor fusion theory
- Practical experience with EKF limitations (linearization errors, computational complexity)
- Importance of rigorous parameter tuning and validation with ground truth data
- Trade-offs between model complexity and computational efficiency for real-time systems

---

## Future Development

- Implement Unscented Kalman Filter (UKF) to handle stronger nonlinearities without linearization
- Integrate visual odometry for additional redundancy in GPS-denied environments
- Port to C++ with Eigen library for embedded real-time deployment
- Develop adaptive noise covariance estimation based on sensor confidence metrics
- Extend to multi-robot collaborative localization (sharing GPS data between agents)
