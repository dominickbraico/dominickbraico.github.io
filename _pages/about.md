---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hello everyone! This is my digital portfolio where I will be outlining my current and past engineering work!

I am a Mechanical Engineering student at the University of Illinois Urbana-Champaign with a minor in Computer Science, graduating in May 2026. I plan to pursue a graduate degree in Robotics upon completion of my Bachelors. I am actively seeking Robotics and Autonomy internships for Summer 2026.







# Education

<img src="images/uiuc-iblock.png" alt="UIUC I-Block" style="float: left; width: 60px; margin-right: 15px; margin-bottom: 10px;">

**BS Mechanical Engineering, Minor in Computer Science**
*University of Illinois Urbana-Champaign*
*2022.08 - 2026.05* | GPA: 3.92

**Relevant Coursework:** Software Development for Mobile Robots, Robotic Software Engineering, Intro to Robotics, Dynamics of Mechanical Systems, Applied Machine Learning, Computational Linear Algebra, Signal Processing

# Work Experience

<div style="display: flex; margin-bottom: 20px; clear: both;">
  <div style="flex: 0 0 60px; margin-right: 15px;">
    <img src="images/usace.png" alt="USACE Logo" style="width: 100%;">
  </div>
  <div style="flex: 1;">
    <p style="margin-top: 0;"><strong>Field Robotics Engineering Intern</strong> - <em>May 2024 – March 2025</em><br>
    Robotics for Engineer Operations - Construction Engineering Research Laboratory</p>
    <ul>
      <li>Designed a rugged electronic control module for robot sensors and compute unit, reducing the volume of the electrical system and improving weatherproofing for a modular cable-driven construction robot</li>
      <li>Modeled and fabricated 10+ custom sensor mounts in SolidWorks for LiDAR and IMU systems, improving sensor data integrity on heavy equipment mobile robots</li>
    </ul>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px; clear: both;">
  <div style="flex: 0 0 60px; margin-right: 15px;">
    <img src="images/whisperaero_logo.png" alt="Whisper Aero Logo" style="width: 100%;">
  </div>
  <div style="flex: 1;">
    <p style="margin-top: 0;"><strong>Powertrain Engineering Intern</strong> - <em>May 2025 – Aug 2025</em><br>
    Whisper Aero</p>
    <ul>
      <li>Developed firmware in C/C++ for motor controllers and a Python GUI for control and tuning of high power density 3-phase motors using field-oriented control</li>
      <li>Manufactured motor dynamometer testing fixtures and conducted performance testing to characterize the powertrain system across the electric propulsor duty cycle</li>
      <li>Automated dynamometer testing using Python scripts for data collection and torque sweep demands to dynamometer</li>
    </ul>
  </div>
</div>

# Projects

<div style="display: flex; margin-bottom: 30px; clear: both;">
  <div style="flex: 0 0 300px; margin-right: 20px;">
    <img src="images/husky_ur3_gripper.png" alt="Robotic Mobile Manipulator" style="width: 100%; border-radius: 8px;">
  </div>
  <div style="flex: 1;">
    <h3 style="margin-top: 0;">Robotic Mobile Manipulator Simulation</h3>
    <p><strong>Skills:</strong> ROS 2, Gazebo, Python, C++, Trajectory Planning, Sensor Integration</p>
    <ul>
      <li>Developed a comprehensive high-fidelity simulation environment in Gazebo featuring a Clearpath Husky mobile platform integrated with a UR3 manipulator arm and Robotiq 2F-85 gripper</li>
      <li>Created ROS 2 package for control of all robot joints, enabling trajectory planning for complex manipulation tasks</li>
      <li>Integrated virtual sensor systems, including wheel encoders and LiDAR, and developed Python nodes for data acquisition and robot state estimation</li>
    </ul>
  </div>
</div>

<div style="display: flex; margin-bottom: 30px; clear: both;">
  <div style="flex: 0 0 300px; margin-right: 20px;">
    <img src="images/23season.jpg" alt="GHOST Electric Motorcycle" style="width: 100%; border-radius: 8px;">
  </div>
  <div style="flex: 1;">
    <h3 style="margin-top: 0;">Electric Motorcycle Control System <a href="https://ghostelectric.web.illinois.edu/" target="_blank" style="font-size: 0.8em;">🔗</a></h3>
    <p><strong>Skills:</strong> Embedded C/C++, CAN Bus, Feedback Control, Sensor Integration, PCB Design</p>
    <ul>
      <li>Developed control system software for 45kW PMAC motor on 103.6V electric motorcycle platform</li>
      <li>Implemented feedback control algorithms to optimize torque response and motor performance</li>
      <li>Integrated data collection from motor encoder, IMU, temperature sensors, and BMS to create real-time vehicle performance dashboard</li>
      <li>Designed and fabricated wiring harness and high-power cabling for the electrical system</li>
    </ul>
  </div>
</div>

<div style="display: flex; margin-bottom: 30px; clear: both;">
  <div style="flex: 0 0 300px; margin-right: 20px;">
    <img src="images/atlas.png" alt="Lunar Rover Excavation" style="width: 100%; border-radius: 8px;">
  </div>
  <div style="flex: 1;">
    <h3 style="margin-top: 0;">Lunar Rover Excavation Mechanisms</h3>
    <p><strong>Skills:</strong> SolidWorks, Mechanical Design, Aluminum Fabrication, System Integration, NASA Artemis Standards</p>
    <ul>
      <li>Designed and fabricated regolith collection mechanism to transport BP-1 lunar regolith simulant for NASA Artemis Challenge</li>
      <li>Led structural design of Aluminum 6061-T6 components for electric motor and drivetrain system mounting</li>
      <li>Optimized excavation system for reliability in simulated lunar surface conditions</li>
      <li>Conducted testing and iteration to ensure robust performance during collection operations</li>
    </ul>
  </div>
</div>

# Skills

**Mechanical Design:** SolidWorks (Certified Mechanical Design Associate), Autodesk Fusion

**Fabrication:** 3D Printing, Waterjet, Laser Cutter, Shop Tools, Soldering

**Programming:** Python, C/C++, ROS 2
