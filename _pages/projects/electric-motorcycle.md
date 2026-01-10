---
permalink: /projects/electric-motorcycle/
title: "Electric Motorcycle Control System"
excerpt: "High-power motor control system for electric motorcycle"
author_profile: true
---

# Electric Motorcycle Control System

**Duration:** 2023-2024 | **Role:** Controls Engineer | **Team:** UIUC GHOST Motorsports

<img src="/images/ghost_controls.jpg" alt="GHOST Electric Motorcycle" style="width: 100%; max-width: 800px; border-radius: 8px; margin-bottom: 20px;">

## Problem Statement

Electric motorcycles require sophisticated control systems to manage high-power motors safely and efficiently. The challenge was to develop a complete control architecture for a 45kW electric powertrain that delivers smooth, responsive performance while monitoring critical vehicle systems and maintaining rider safety.

## Solution Overview

Designed and implemented a comprehensive motor control system for a high-performance electric motorcycle featuring a 45kW PMAC motor on a 103.6V platform. The system integrates real-time feedback control, multi-sensor data acquisition, and performance monitoring to optimize torque delivery and ensure safe operation.

---

## System Architecture

### Powertrain Specifications

**Motor System:**
- 45kW (60hp) peak power PMAC motor
- 103.6V nominal voltage (28S lithium-ion battery)
- Field-oriented control (FOC) for maximum efficiency
- Liquid cooling system for thermal management

**Sensor Suite:**
- Motor encoder (Hall-effect sensors, 6000 RPM max)
- 6-axis IMU for vehicle dynamics
- Thermistors on motor windings and controller
- High-voltage current sensors
- Battery Management System (BMS) CAN interface

---

## Technical Implementation

### Control Software Development

**Torque Control Algorithm:**
- Implemented PI control loops for torque regulation based on throttle input
- Developed non-linear throttle mapping for intuitive rider response (exponential curve in lower range, linear at high throttle)
- Integrated torque limiting based on motor temperature and battery state of charge

**Regenerative Braking:**
- Programmed regenerative braking control activated by front brake lever sensor
- Implemented smooth transition between motoring and generating modes
- Tuned maximum regen torque to prevent rear wheel lockup

**Safety Systems:**
- Developed fault detection for overcurrent, overvoltage, and thermal events
- Implemented emergency shutdown sequence with controlled motor de-energization
- Created interlock logic for kickstand, kill switch, and brake activation

### CAN Bus Integration

- Configured CAN communication at 250 kbps for sensor data exchange
- Parsed BMS messages for cell voltages, temperatures, and state of charge
- Transmitted motor controller status and fault codes to dashboard
- Achieved <10ms latency for critical safety-related messages

### Data Acquisition & Dashboard

**Real-Time Performance Monitoring:**
- Developed dashboard display showing speed, battery SoC, motor temperature, power output
- Logged high-frequency data (500 Hz) for post-ride analysis and tuning
- Created Python-based data visualization tools for performance review

### Electrical System Design

**Wiring Harness Fabrication:**
- Designed complete electrical schematic in EAGLE CAD
- Selected and crimped Anderson Powerpole and XT90 connectors for high-current paths
- Routed and fabricated custom wiring harness with proper gauge wire (8 AWG for motor phases)
- Implemented strain relief and weatherproofing for all connections

**High-Power Cabling:**
- Fabricated battery pack interconnects using copper busbars
- Designed contactor control circuit for safe high-voltage switching
- Installed fuses and circuit protection at appropriate ratings

---

## Technical Challenges & Solutions

**Challenge 1: Electromagnetic Interference (EMI)**
- **Problem:** Motor controller switching noise (16 kHz PWM) corrupted sensor signals
- **Solution:** Implemented hardware filtering with RC circuits on analog inputs; twisted pair wiring for differential signals; ferrite beads on sensitive lines; achieved SNR >40 dB

**Challenge 2: Thermal Management**
- **Problem:** Motor and controller overheating during aggressive riding
- **Solution:** Developed thermal model in MATLAB to predict temperatures; implemented active derating that reduces power at 80°C threshold; added liquid cooling loop with electric pump

**Challenge 3: Smooth Torque Delivery**
- **Problem:** Instantaneous electric motor torque caused jerky throttle response
- **Solution:** Applied digital low-pass filter (10 Hz cutoff) to throttle signal; tuned PI gains using Ziegler-Nichols method; implemented torque slew rate limiting (500 Nm/s max)

---

## Results & Performance

**Achieved Metrics:**
- 0-60 mph: ~4.5 seconds (estimated, based on dyno power curve)
- Top speed: 85 mph (electronically limited)
- Range: 40-50 miles (mixed riding)
- Regenerative efficiency: Recovered 15-20% energy during deceleration

**System Reliability:**
- Successfully completed 500+ test miles without motor controller faults
- Thermal protection prevented any component damage during testing
- CAN bus communication maintained 99.9%+ uptime

---

## Technologies & Tools

**Programming:** C/C++ (embedded firmware), Python (data analysis)
**Protocols:** CAN bus (250 kbps), UART, I2C
**Hardware:** STM32 microcontroller, motor controller (Kelly KLS), BMS
**Software Tools:** STM32CubeIDE, MATLAB/Simulink, Python (pandas, matplotlib)
**Electrical:** EAGLE CAD (schematics), multimeter, oscilloscope for debugging

---

## Key Learnings

- Hands-on experience with high-voltage systems and electrical safety protocols
- Deep understanding of field-oriented control for PMAC motors
- Practical skills in embedded systems development and real-time control
- Importance of robust error handling and fault detection in safety-critical applications

---

## Future Development

- Machine learning-based adaptive torque mapping based on riding style
- Integration of traction control using IMU acceleration data
- Wireless telemetry for remote diagnostics and performance monitoring
- Advanced battery thermal management with predictive algorithms
