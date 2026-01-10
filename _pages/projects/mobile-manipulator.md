---
permalink: /projects/mobile-manipulator/
title: "Robotic Mobile Manipulator Simulation"
excerpt: "High-fidelity simulation of Husky mobile platform with UR3 arm"
author_profile: true
---

<style>
.project-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem 2rem;
  border-radius: 12px;
  color: white;
  margin-bottom: 2rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.project-header h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  font-weight: 700;
}

.project-meta {
  display: flex;
  gap: 2rem;
  font-size: 0.95rem;
  opacity: 0.95;
  flex-wrap: wrap;
}

.hero-image-container {
  position: relative;
  margin: 2rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

.hero-image-container img {
  width: 100%;
  display: block;
}

.section-card {
  background: #ffffff;
  border-left: 4px solid #667eea;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.section-card h2 {
  color: #2d3748;
  margin-top: 0;
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.info-box {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.info-box h3 {
  color: #667eea;
  font-size: 1.1rem;
  margin: 0 0 0.75rem 0;
}

.info-box ul {
  margin: 0;
  padding-left: 1.25rem;
  line-height: 1.7;
}

.achievement-badge {
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-left: 3px solid #667eea;
  padding: 1rem 1.5rem;
  margin: 0.75rem 0;
  border-radius: 6px;
}

.achievement-badge strong {
  color: #667eea;
}

.challenge-card {
  background: #fffaf0;
  border-left: 3px solid #ed8936;
  padding: 1.25rem;
  margin: 1rem 0;
  border-radius: 6px;
}

.challenge-card h3 {
  color: #c05621;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1rem 0;
}

.tech-tag {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.stat-box {
  background: #f7fafc;
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #e2e8f0;
}

.stat-box .number {
  font-size: 1.75rem;
  font-weight: 700;
  color: #667eea;
  display: block;
}

.stat-box .label {
  font-size: 0.9rem;
  color: #718096;
  margin-top: 0.25rem;
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.gallery-item {
  background: #f7fafc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%);
}

.gallery-item .caption {
  padding: 1rem;
  font-size: 0.9rem;
  color: #4a5568;
  text-align: center;
}

.divider {
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, #667eea 50%, transparent 100%);
  margin: 3rem 0;
  border: none;
}
</style>

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
