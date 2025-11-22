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

I am a Mechanical Engineering student at the University of Illinois Urbana-Champaign with a minor in Computer Science, graduating in May 2026. My work focuses on robotics, control systems, and embedded software development, with experience spanning field robotics, powertrain engineering, and autonomous systems.

I have worked as a Field Robotics Engineering Intern at the Construction Engineering Research Laboratory, where I designed rugged electronic control modules and custom sensor mounts for modular construction robots. I also interned at Whisper Aero, developing firmware for motor controllers and conducting dynamometer testing for high power density electric propulsion systems.

My technical expertise includes mechanical design (SolidWorks CSWA certified), embedded programming in C/C++ and Python, and robotics frameworks like ROS 2. I am passionate about the intersection of mechanical systems and software, particularly in control systems, sensor integration, and autonomous vehicle development.






# 📖 Education

<img src="images/uiuc-iblock.png" alt="UIUC I-Block" style="float: left; width: 60px; margin-right: 15px; margin-bottom: 10px;">

**BS Mechanical Engineering, Minor in Computer Science**
*University of Illinois Urbana-Champaign*
*2022.08 - 2026.05* | GPA: 3.92

**Relevant Coursework:** Software Development for Mobile Robots, Robotic Software Engineering, Intro to Robotics, Dynamics of Mechanical Systems, Applied Machine Learning, Computational Linear Algebra, Signal Processing

# 💻 Work Experience

**Field Robotics Engineering Intern** - *May 2024 – March 2025*
Robotics for Engineer Operations - Construction Engineering Research Laboratory
- Designed a rugged electronic control module for robot sensors and compute unit, reducing the volume of the electrical system and improving weatherproofing for a modular cable-driven construction robot
- Modeled and fabricated 10+ custom sensor mounts in SolidWorks for LiDAR and IMU systems, improving sensor data integrity on heavy equipment mobile robots

**Powertrain Engineering Intern** - *May 2025 – Aug 2025*
Whisper Aero
- Developed firmware in C/C++ for motor controllers and a Python GUI for control and tuning of high power density 3-phase motors using field-oriented control
- Manufactured motor dynamometer testing fixtures and conducted performance testing to characterize the powertrain system across the electric propulsor duty cycle
- Automated dynamometer testing using Python scripts for data collection and torque sweep demands to dynamometer

# 🎯 Projects

**Robotic Mobile Manipulator Simulation**
- Developed a comprehensive high-fidelity simulation environment in Gazebo featuring a Clearpath Husky mobile platform integrated with a UR3 manipulator arm and Robotiq 2F-85 gripper
- Created ROS 2 package for control of all robot joints, enabling trajectory planning for complex manipulation tasks
- Integrated virtual sensor systems, including wheel encoders and LiDAR, and developed Python nodes for data acquisition and robot state estimation



# 🛠️ Skills

**Mechanical Design:** SolidWorks (Certified Mechanical Design Associate), Autodesk Fusion

**Fabrication:** 3D Printing, Waterjet, Laser Cutter, Shop Tools, Soldering

**Programming:** Python, C/C++, ROS 2
