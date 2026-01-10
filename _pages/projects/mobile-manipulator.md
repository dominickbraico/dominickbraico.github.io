---
permalink: /projects/mobile-manipulator/
title: "Robotic Mobile Manipulator Simulation"
excerpt: "High-fidelity simulation of Husky mobile platform with UR3 arm"
author_profile: true
---

# Robotic Mobile Manipulator Simulation

**Duration:** Fall 2024 | **Role:** Individual Project

<img src="/images/husky_ur3_gripper.png" alt="Robotic Mobile Manipulator" style="width: 100%; max-width: 800px; border-radius: 8px; margin-bottom: 20px;">

## Problem Statement

Developing and testing mobile manipulation algorithms on physical hardware is costly, time-consuming, and potentially dangerous. A high-fidelity simulation environment was needed to enable rapid prototyping and validation of control algorithms before deployment on real robotic systems.

## Solution Overview

Developed a comprehensive Gazebo simulation environment featuring a Clearpath Husky mobile platform integrated with a UR3 manipulator arm and Robotiq 2F-85 gripper. This platform enables safe, repeatable testing of complex manipulation and navigation tasks in realistic virtual environments.

---

## Technical Implementation

### System Architecture

**Platform Components:**
- **Mobile Base:** Clearpath Husky (4-wheel differential drive)
- **Manipulator:** Universal Robots UR3 (6-DOF arm, 3kg payload)
- **End Effector:** Robotiq 2F-85 adaptive gripper
- **Sensors:** Wheel encoders, LiDAR (SICK LMS1xx), joint position sensors

### Software Stack

**ROS 2 Control Package:**
- Developed custom controller nodes for coordinated mobile base and arm motion
- Implemented joint trajectory action servers for smooth motion execution
- Created state publisher nodes for real-time robot configuration broadcasting

**Motion Planning Integration:**
- Configured MoveIt 2 for collision-aware trajectory planning
- Integrated OMPL planners (RRT-Connect, PRM) for path generation
- Developed planning scene management for dynamic obstacle handling

**Sensor Data Processing:**
- Python nodes for LiDAR data acquisition and processing
- Odometry fusion from wheel encoders for base localization
- Joint state estimation for manipulator configuration tracking

### Key Technical Achievements

✓ **Unified Control Framework:** Single ROS 2 package managing 10+ degrees of freedom (4 wheels + 6 arm joints + gripper)

✓ **Real-Time Performance:** Maintained 100Hz control loop for smooth trajectory execution

✓ **Accurate Physics Simulation:** Configured Gazebo contact parameters and joint friction for realistic behavior

✓ **Modular Architecture:** Plug-and-play design allows swapping sensors, end effectors, and planning algorithms

---

## Technical Challenges & Solutions

**Challenge 1: Coordinate Frame Management**
- **Problem:** Managing transforms between mobile base, arm base, end effector, and sensor frames
- **Solution:** Implemented TF2 tree with static and dynamic transforms; created URDF with proper joint origins and link relationships

**Challenge 2: Motion Synchronization**
- **Problem:** Coordinating base movement while maintaining arm stability during manipulation
- **Solution:** Developed state machine to sequence base navigation and arm manipulation; implemented admittance control to compensate for base motion

**Challenge 3: Simulation-to-Reality Gap**
- **Problem:** Ensuring behaviors in simulation translate to real hardware
- **Solution:** Calibrated friction coefficients, mass properties, and controller gains based on real Husky/UR3 specifications

---

## Results & Impact

**Capabilities Demonstrated:**
- Autonomous navigation to target waypoints within ±5cm accuracy
- Pick-and-place operations with 95%+ success rate in simulation
- Collision-free motion planning in cluttered environments
- Real-time sensor data visualization and state monitoring

**Applications:**
- Testing platform for warehouse automation algorithms
- Educational tool for robotics coursework
- Development environment for research in mobile manipulation
- Validation testbed before expensive hardware deployment

---

## Technologies & Tools

**Languages:** Python, C++, URDF/XML
**Frameworks:** ROS 2 (Humble), Gazebo Classic 11, MoveIt 2
**Libraries:** TF2, rclpy/rclcpp, sensor_msgs, trajectory_msgs
**Planning:** OMPL (RRT-Connect, RRT*, PRM)
**Visualization:** RViz2, Gazebo GUI

---

## Future Development

- Computer vision integration for object detection and pose estimation
- Deep reinforcement learning for autonomous grasping policy
- Multi-robot coordination in shared environments
- Hardware deployment and sim-to-real transfer learning
