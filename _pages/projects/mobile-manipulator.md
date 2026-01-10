---
permalink: /projects/mobile-manipulator/
title: "Robotic Mobile Manipulator Simulation"
excerpt: "High-fidelity simulation of Husky mobile platform with UR3 arm"
author_profile: true
---

# Robotic Mobile Manipulator Simulation

<img src="/images/husky_ur3_gripper.png" alt="Robotic Mobile Manipulator" style="width: 100%; max-width: 800px; border-radius: 8px; margin-bottom: 20px;">

## Overview

This project involved developing a comprehensive high-fidelity simulation environment featuring a Clearpath Husky mobile platform integrated with a UR3 manipulator arm and Robotiq 2F-85 gripper. The simulation provides a realistic testing platform for complex manipulation tasks in various environments.

## Technical Details

**Skills Used:** ROS 2, Gazebo, Python, C++, Trajectory Planning, Sensor Integration

### Key Features

- **Integrated Robot Platform**: Combined mobile base (Clearpath Husky) with 6-DOF manipulator arm (UR3) and parallel gripper
- **Control System**: Custom ROS 2 package enabling coordinated control of all robot joints
- **Trajectory Planning**: Implemented motion planning algorithms for complex manipulation tasks
- **Sensor Suite**: Integrated virtual sensors including wheel encoders and LiDAR for navigation and perception
- **State Estimation**: Developed Python nodes for real-time data acquisition and robot state estimation

## Technical Implementation

The simulation environment was built using:
- **Gazebo**: Physics engine and 3D visualization
- **ROS 2**: Robot middleware for communication and control
- **MoveIt 2**: Motion planning framework for arm trajectories
- **Custom Controllers**: Joint-space and task-space controllers for coordinated motion

## Applications

This simulation platform enables:
- Testing of manipulation algorithms in safe virtual environment
- Development of autonomous task planning strategies
- Validation of sensor fusion and state estimation algorithms
- Training of machine learning models for robotic manipulation

## Future Enhancements

- Integration with computer vision for object detection and tracking
- Implementation of autonomous navigation with obstacle avoidance
- Development of pick-and-place task sequences
- Addition of force/torque sensing for contact-rich manipulation
