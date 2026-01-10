---
permalink: /projects/gps-ins-ekf/
title: "GPS-INS Extended Kalman Filter"
excerpt: "Sensor fusion for robust state estimation"
author_profile: true
---

# GPS-INS Extended Kalman Filter

<video autoplay loop muted playsinline style="width: 100%; max-width: 800px; border-radius: 8px; margin-bottom: 20px;">
  <source src="/images/ekf_spedup_cropped.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Overview

This project implements an Extended Kalman Filter (EKF) for fusing GPS and Inertial Navigation System (INS) data to achieve robust state estimation for mobile robots and vehicles. The implementation demonstrates superior localization accuracy compared to individual sensor outputs through optimal sensor fusion.

## Technical Details

**Skills Used:** Python, Sensor Fusion, State Estimation, Kalman Filtering, Navigation Algorithms, Linear Algebra

### Sensor Fusion Architecture

The EKF combines:
- **GPS**: Absolute position measurements (lower frequency, higher accuracy)
- **INS**: High-frequency inertial measurements (accelerometer and gyroscope data)

This complementary sensor combination provides continuous, accurate state estimates by leveraging GPS's absolute position accuracy and INS's high-rate measurements.

## Algorithm Implementation

### Extended Kalman Filter Components

1. **Motion Model**:
   - Predicts vehicle state based on inertial measurements
   - Accounts for vehicle dynamics and kinematics
   - Propagates state uncertainty through prediction step

2. **Measurement Model**:
   - GPS position measurements
   - Measurement noise characterization
   - Outlier detection and rejection

3. **State Vector**:
   - Position (x, y, z)
   - Velocity (vx, vy, vz)
   - Orientation (roll, pitch, yaw)
   - Sensor biases

### Key Features

- **Prediction Step**: Uses INS measurements to propagate state estimate
- **Update Step**: Corrects prediction using GPS measurements
- **Covariance Tracking**: Maintains uncertainty estimates for state variables
- **Adaptive Filtering**: Adjusts to varying sensor noise characteristics

## Simulation Environment

The implementation includes:
- Realistic sensor noise models (GPS multipath, IMU drift)
- Various motion profiles (straight lines, turns, acceleration)
- Environmental conditions (urban canyon, open sky)
- Ground truth comparison for validation

## Performance Results

The fused estimate demonstrates:
- **Improved Accuracy**: Lower position error than GPS or INS alone
- **Continuous Updates**: High-rate estimates between GPS updates
- **Robustness**: Maintains accuracy during GPS dropouts using INS propagation
- **Drift Compensation**: GPS updates correct INS drift accumulation

## Technical Challenges

- Linearization of nonlinear motion and measurement models
- Tuning process and measurement noise covariances
- Handling GPS outages and degraded signal conditions
- Managing computational efficiency for real-time operation

## Applications

This sensor fusion approach is applicable to:
- Autonomous vehicle navigation
- Mobile robot localization
- UAV flight control systems
- Surveying and mapping platforms

## Implementation Details

**Language**: Python with NumPy for efficient matrix operations

**Key Libraries**:
- NumPy: Linear algebra and matrix computations
- Matplotlib: Visualization of trajectories and estimation errors
- SciPy: Statistical functions and optimization

## Future Enhancements

- Integration of additional sensors (magnetometer, barometer)
- Adaptive noise covariance estimation
- Multi-hypothesis tracking for outlier rejection
- Real-time implementation on embedded hardware
