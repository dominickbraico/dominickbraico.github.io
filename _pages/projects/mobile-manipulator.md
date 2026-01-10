---
permalink: /projects/mobile-manipulator/
title: "Robotic Mobile Manipulator Simulation"
excerpt: "High-fidelity simulation of Husky mobile platform with UR3 arm"
author_profile: true
---

<link rel="stylesheet" href="/assets/css/project-styles.css">

<div class="project-header">
  <h1>Robotic Mobile Manipulator Simulation</h1>
  <div class="project-meta">
    <span>📅 <strong>Duration:</strong> Fall 2024</span>
    <span>👤 <strong>Role:</strong> Individual Project</span>
    <span>🎓 <strong>Course:</strong> Robotic Software Engineering</span>
  </div>
</div>

<div class="hero-image-container">
  <img src="/images/husky_ur3_gripper.png" alt="Robotic Mobile Manipulator in Gazebo Simulation">
</div>

<div class="section-card">
  <h2>🎯 Project Overview</h2>
  <p style="font-size: 1.05rem; line-height: 1.7; color: #4a5568;">
    Developing and testing mobile manipulation algorithms on physical hardware is <strong>costly, time-consuming, and potentially dangerous</strong>. This project created a high-fidelity simulation environment to enable rapid prototyping and validation of control algorithms before deployment on real robotic systems.
  </p>
  <p style="font-size: 1.05rem; line-height: 1.7; color: #4a5568; margin-top: 1rem;">
    The result: A comprehensive Gazebo simulation featuring a <strong>Clearpath Husky mobile platform</strong> integrated with a <strong>UR3 manipulator arm</strong> and <strong>Robotiq 2F-85 gripper</strong>, enabling safe, repeatable testing of complex manipulation tasks.
  </p>
</div>

<hr class="divider">

<div class="section-card">
  <h2>🔧 System Architecture</h2>

  <div class="info-grid">
    <div class="info-box">
      <h3>🤖 Hardware Platform</h3>
      <ul>
        <li><strong>Mobile Base:</strong> Clearpath Husky (4WD)</li>
        <li><strong>Arm:</strong> UR3 (6-DOF, 3kg payload)</li>
        <li><strong>Gripper:</strong> Robotiq 2F-85</li>
        <li><strong>Sensors:</strong> LiDAR, Encoders</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>💻 Software Stack</h3>
      <ul>
        <li><strong>Middleware:</strong> ROS 2 Humble</li>
        <li><strong>Simulator:</strong> Gazebo Classic 11</li>
        <li><strong>Planning:</strong> MoveIt 2, OMPL</li>
        <li><strong>Visualization:</strong> RViz2</li>
      </ul>
    </div>
  </div>

  <div class="image-gallery">
    <div class="gallery-item">
      <img src="" alt="System Architecture Diagram">
      <div class="caption">ROS 2 Node Graph & Communication</div>
    </div>
    <div class="gallery-item">
      <img src="" alt="Motion Planning Visualization">
      <div class="caption">MoveIt 2 Trajectory Planning</div>
    </div>
    <div class="gallery-item">
      <img src="" alt="Sensor Integration">
      <div class="caption">Multi-Sensor Data Fusion</div>
    </div>
  </div>
</div>

<div class="section-card">
  <h2>⚡ Key Technical Achievements</h2>

  <div class="achievement-badge">
    <strong>Unified Control Framework</strong><br>
    Single ROS 2 package managing 10+ degrees of freedom (4 wheels + 6 arm joints + gripper)
  </div>

  <div class="achievement-badge">
    <strong>Real-Time Performance</strong><br>
    Maintained 100Hz control loop for smooth trajectory execution with <5ms latency
  </div>

  <div class="achievement-badge">
    <strong>Accurate Physics Simulation</strong><br>
    Configured Gazebo contact parameters and joint friction for realistic behavior matching real hardware
  </div>

  <div class="achievement-badge">
    <strong>Modular Architecture</strong><br>
    Plug-and-play design allows swapping sensors, end effectors, and planning algorithms without code changes
  </div>
</div>

<hr class="divider">

<div class="section-card">
  <h2>🚧 Technical Challenges & Solutions</h2>

  <div class="challenge-card">
    <h3>Challenge 1: Coordinate Frame Management</h3>
    <p><strong>Problem:</strong> Managing transforms between mobile base, arm base, end effector, and sensor frames</p>
    <p><strong>Solution:</strong> Implemented TF2 tree with static and dynamic transforms; created URDF with proper joint origins and link relationships</p>
  </div>

  <div class="challenge-card">
    <h3>Challenge 2: Motion Synchronization</h3>
    <p><strong>Problem:</strong> Coordinating base movement while maintaining arm stability during manipulation</p>
    <p><strong>Solution:</strong> Developed state machine to sequence base navigation and arm manipulation; implemented admittance control to compensate for base motion</p>
  </div>

  <div class="challenge-card">
    <h3>Challenge 3: Simulation-to-Reality Gap</h3>
    <p><strong>Problem:</strong> Ensuring behaviors in simulation translate to real hardware</p>
    <p><strong>Solution:</strong> Calibrated friction coefficients, mass properties, and controller gains based on real Husky/UR3 specifications</p>
  </div>
</div>

<div class="section-card">
  <h2>📊 Results & Performance</h2>

  <div class="stats-grid">
    <div class="stat-box">
      <span class="number">±5cm</span>
      <span class="label">Navigation Accuracy</span>
    </div>
    <div class="stat-box">
      <span class="number">95%+</span>
      <span class="label">Pick-Place Success Rate</span>
    </div>
    <div class="stat-box">
      <span class="number">100Hz</span>
      <span class="label">Control Loop Frequency</span>
    </div>
    <div class="stat-box">
      <span class="number">10+ DOF</span>
      <span class="label">Degrees of Freedom</span>
    </div>
  </div>

  <h3 style="margin-top: 2rem; color: #2d3748;">Applications</h3>
  <div class="info-grid">
    <div class="info-box">
      <p>✓ Testing platform for warehouse automation algorithms</p>
    </div>
    <div class="info-box">
      <p>✓ Educational tool for robotics coursework</p>
    </div>
    <div class="info-box">
      <p>✓ Development environment for mobile manipulation research</p>
    </div>
    <div class="info-box">
      <p>✓ Validation testbed before hardware deployment</p>
    </div>
  </div>
</div>

<hr class="divider">

<div class="section-card">
  <h2>🛠️ Technologies & Tools</h2>

  <h3 style="color: #4a5568; font-size: 1.1rem; margin-bottom: 0.75rem;">Languages & Frameworks</h3>
  <div class="tech-stack">
    <span class="tech-tag">Python</span>
    <span class="tech-tag">C++</span>
    <span class="tech-tag">ROS 2 Humble</span>
    <span class="tech-tag">Gazebo Classic 11</span>
    <span class="tech-tag">MoveIt 2</span>
    <span class="tech-tag">URDF/XML</span>
  </div>

  <h3 style="color: #4a5568; font-size: 1.1rem; margin: 1.5rem 0 0.75rem 0;">Libraries & Algorithms</h3>
  <div class="tech-stack">
    <span class="tech-tag">TF2</span>
    <span class="tech-tag">rclpy/rclcpp</span>
    <span class="tech-tag">OMPL (RRT-Connect)</span>
    <span class="tech-tag">sensor_msgs</span>
    <span class="tech-tag">trajectory_msgs</span>
    <span class="tech-tag">RViz2</span>
  </div>
</div>

<div class="section-card" style="background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%); border-left-color: #764ba2;">
  <h2>🚀 Future Development</h2>
  <ul style="line-height: 2; font-size: 1.05rem;">
    <li>Computer vision integration for object detection and pose estimation</li>
    <li>Deep reinforcement learning for autonomous grasping policy</li>
    <li>Multi-robot coordination in shared environments</li>
    <li>Hardware deployment and sim-to-real transfer learning</li>
  </ul>
</div>
