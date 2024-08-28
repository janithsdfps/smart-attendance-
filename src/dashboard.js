import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const summaryData = [
    { title: "Total Students", count: 250, icon: "🎓" },
    { title: "Total Employees", count: 168, icon: "👥" },
    { title: "Employee Attendance", count: 125, icon: "🕒" },
    { title: "Students Attendance", count: 212, icon: "🕒" },
  ];

  const students = [
    { name: "Tim Drake", profilePic: "/imgs/img1.jpeg" },
    { name: "Jason Todd", profilePic: "/imgs/img1.jpeg" },
    { name: "Barbara Gordon", profilePic: "/imgs/img1.jpeg" },
    { name: "Stephanie Brown", profilePic: "/imgs/img1.jpeg" },
  ];

  const employees = [
    { name: "Bruce Wayne", profilePic: "path/to/bruce-wayne.jpg" },
    { name: "Jason Todd", profilePic: "path/to/jason-todd.jpg" },
    { name: "Terry McGinnis", profilePic: "path/to/terry-mcginnis.jpg" },
  ];

  const attendance = [
    { date: "26/06/2024", checkIn: "03:00 PM" },
    { date: "26/06/2024", checkIn: "04:00 PM" },
    { date: "26/06/2024", checkIn: "03:00 PM" },
    { date: "26/06/2024", checkIn: "04:00 PM" },
    { date: "26/06/2024", checkIn: "03:00 PM" },
    { date: "26/06/2024", checkIn: "04:00 PM" },
  ];

  return (
    <div className={`dashboard-layout ${!isSidebarVisible ? "with-sidebar" : ""}`}>
      {!isSidebarVisible && (
        <button
          className="show-sidebar-button"
          onClick={() => setIsSidebarVisible(true)}
        >
          Show Sidebar
        </button>
      )}

      <div className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
        <button
          className="toggle-sidebar-button"
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        >
          {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
        </button>
        <h2>AMS</h2>
        <nav>
          <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          {/* <li><Link to="/student">Student</Link></li>
          <li><Link to="/employees">Employees</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/change-password">Change Password</Link></li>
          <li><Link to="/logout">Logout</Link></li> */}
          </ul>
        </nav>
      </div>

      <div className="dashboard-content">
        <header className="dash-header">
          <span className="date">Date: 2024/06/21</span>
          <input type="search" placeholder="Search" className="search-bar" />
        </header>

        <div className="summary-cards">
          {summaryData.map((item, index) => (
            <div key={index} className="summary-card">
              <span className="icon">{item.icon}</span>
              <h3>{item.count}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="lists-and-details">
          <div className="lists">
            <div className="student-list">
              <h3>Student List</h3>
              <input type="search" placeholder="Search" />
              <ul>
                {students.map((student, index) => (
                  <li key={index} className="list-item">
                    <img src={student.profilePic} className="profile-pic" alt="Profile" />
                    {student.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="employee-list">
              <h3>Employee List</h3>
              <input type="search" placeholder="Search" />
              <ul>
                {employees.map((employee, index) => (
                  <li key={index} className="list-item">
                    <img src={employee.profilePic} className="profile-pic" alt="Profile" />
                    {employee.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="attendance-details">
            <h3>Attendance Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Check-in</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((record, index) => (
                  <tr key={index}>
                    <td>{record.date}</td>
                    <td>{record.checkIn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
