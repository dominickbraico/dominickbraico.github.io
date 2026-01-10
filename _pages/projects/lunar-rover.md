---
permalink: /projects/lunar-rover/
title: "Lunar Rover Excavation Mechanisms"
excerpt: "Competition rover for NASA Artemis Challenge"
author_profile: true
---

# Lunar Rover Excavation Mechanisms

**Duration:** 2022-2023 | **Role:** Mechanical Design Lead - Excavation Systems | **Team:** UIUC Robotics (15 members)

<img src="/images/23season.jpg" alt="Lunar Rover Excavation" style="width: 100%; max-width: 800px; border-radius: 8px; margin-bottom: 20px;">

## Problem Statement

NASA's Artemis program requires autonomous systems capable of excavating and processing lunar regolith for in-situ resource utilization (ISRU). The NASA Artemis Lunabotics Challenge tasks university teams with designing rovers to autonomously navigate lunar terrain, excavate BP-1 regolith simulant, and deposit collected material—all within strict mass, power, and size constraints.

## Solution Overview

Led the mechanical design of excavation and structural systems for a competition lunar rover. Developed a custom bucket-conveyor excavation mechanism optimized for BP-1 lunar regolith simulant, designed Aluminum 6061-T6 chassis components, and integrated with mobility and electrical subsystems to create a competition-ready autonomous rover.

---

## Design Requirements & Constraints

**Competition Specifications:**
- Excavate and transport minimum 10kg BP-1 lunar regolith simulant in 10 minutes
- Autonomous operation (no remote control during collection phase)
- Maximum rover mass: 80 kg
- Maximum dimensions: 1.5m x 0.75m x 0.75m (L×W×H)
- Operate in simulated lunar terrain with obstacles and slopes up to 25°

**Material Properties - BP-1 Simulant:**
- Particle size: 50-500 μm (fine, abrasive powder)
- Bulk density: ~1.5 g/cm³
- Angle of repose: ~35° (flows poorly, requires active excavation)

---

## Technical Implementation

### Excavation Mechanism Design

**Bucket-Conveyor System:**
- Designed rotating bucket wheel with 6 individual scoops (120mm width, 80mm depth each)
- Configured conveyor belt (200mm wide, 8mm pitch timing belt) to transport regolith from buckets to storage hopper
- Modeled in SolidWorks with assembly constraints and motion studies to validate kinematics

**Actuation & Control:**
- Selected NEMA 23 stepper motor (3 Nm holding torque) for bucket wheel rotation
- Specified 5:1 planetary gearbox to achieve optimal excavation speed (15 RPM)
- Designed motor mount bracket with adjustable tension for belt-driven conveyor
- Integrated rotary encoder for closed-loop position feedback

**Material Flow Optimization:**
- Analyzed bucket geometry using angle of repose calculations to prevent premature dumping
- Designed 60° dump angle for reliable regolith transfer to conveyor
- Added elastomer scrapers to prevent buildup on bucket surfaces

### Structural Design

**Chassis Frame:**
- Designed box-beam frame structure in Aluminum 6061-T6 (30mm × 30mm × 3mm wall extrusion)
- Performed FEA in SolidWorks Simulation to validate safety factor >3 under worst-case loading (50 kg point load on excavation assembly)
- Achieved total chassis mass of 12 kg, leaving 68 kg budget for subsystems

**Drivetrain Mounting:**
- Created custom motor mounts for 4× 250W brushless DC motors (one per wheel)
- Designed mounting plates to accommodate 10:1 planetary gearboxes
- Implemented slot-based adjustment mechanism for wheel alignment (±5mm tolerance)

**Excavation Assembly Mount:**
- Designed cantilevered support structure for 8kg excavation mechanism
- Calculated bending moments and selected appropriate wall thickness (4mm) for mounting plate
- Integrated cable routing channels for encoder and motor wiring

### Fabrication & Assembly

**Manufacturing Methods:**
- Waterjet cutting of Aluminum 6061 sheet stock for mounting plates (±0.25mm tolerance)
- TIG welding of frame joints (certified welder, 100% joint penetration)
- CNC milling of motor mount features requiring precision (±0.05mm bore tolerance)
- Tapping and threading for M6 and M8 fasteners

**Assembly Process:**
- Created assembly drawings with Bill of Materials (BOM) and torque specifications
- Led team assembly sessions with proper sequencing to avoid interference
- Implemented lockwashers and Loctite threadlocker on critical fasteners

---

## Technical Challenges & Solutions

**Challenge 1: Abrasive Wear from Regolith**
- **Problem:** BP-1 simulant's fine particles caused rapid wear on aluminum bucket surfaces
- **Solution:** Applied Type III hard-coat anodizing (50 μm thickness) on all contact surfaces; increased wear resistance by 5×; buckets showed minimal degradation after 20+ excavation cycles

**Challenge 2: Regolith Bridging in Hopper**
- **Problem:** Fine regolith particles formed bridges in storage hopper, blocking flow to deposit mechanism
- **Solution:** Redesigned hopper with 55° wall angle (exceeding angle of repose); added passive vibration from drivetrain to aid flow; implemented 120mm minimum opening to prevent bridging

**Challenge 3: Mass Budget Constraints**
- **Problem:** Initial design exceeded 80 kg mass limit by 8 kg
- **Solution:** Conducted mass optimization study; replaced solid plates with rib-stiffened structures; reduced wall thickness on low-stress components from 4mm to 2.5mm based on FEA results; achieved final rover mass of 76 kg

---

## Results & Competition Performance

**Excavation Metrics:**
- Successfully collected 12.5 kg regolith in 8 minutes during competition trial
- Achieved 85% bucket fill efficiency (compared to 60% target)
- Zero mechanical failures during 3 competition runs

**System Reliability:**
- Completed 50+ test excavation cycles without component failure
- Excavation mechanism operated continuously for 15+ minutes without overheating
- Chassis structure showed no permanent deformation under operational loads

**Team Achievement:**
- Placed in top 20 teams nationally in NASA Lunabotics Competition
- Recognized for mechanical design innovation at competition design review

---

## Technologies & Tools

**CAD & Analysis:** SolidWorks (CSWA Certified), SolidWorks Simulation (FEA), SolidWorks Motion Study
**Manufacturing:** Waterjet cutter, CNC mill, TIG welder, drill press, hand tools
**Materials:** Aluminum 6061-T6 (extrusion, plate), hard-coat anodizing, steel fasteners (Grade 8)
**Hardware:** Stepper motors, planetary gearboxes, timing belts/pulleys, bearings (6001RS)
**Documentation:** Engineering drawings (GD&T), assembly instructions, BOM

---

## Key Learnings

- Gained experience designing for abrasive/harsh environments (lunar regolith simulant)
- Developed skills in Design for Manufacturability (DFM) and Design for Assembly (DFA)
- Learned importance of FEA validation before fabrication to avoid costly redesigns
- Practiced effective communication in multidisciplinary team (mechanical, electrical, software)
- Understanding of competition robotics project management and timeline adherence

---

## Future Development

- Implement active vibration system in hopper for improved regolith flow
- Design modular excavation attachments for different terrain types
- Integrate force sensing to detect excavation load and prevent motor stall
- Develop telemetry system for real-time monitoring of excavation metrics
