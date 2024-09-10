import React from 'react';
import './profile.css';
import './App.css'
import './sidebar.css' 
import profileImage from './imgs/img1.jpeg'; 

function Profile({isSidebarVisible,toggleSidebar }) {
  return (

    <div className="dashboard-content">
      {!isSidebarVisible && (
        <button className="show-sidebar-button" onClick={toggleSidebar}>
          Show Sidebar
        </button>
      )}
     

      <div >
        <div >
          <img src={profileImage} alt="Daisy" className="profile-image" />
          <h3>Daisy</h3>
          <button className="edit-button">✏️</button>

          <div className="info-section">
            <div className="personal-info">
              <h4>Personal Info</h4>
              <p>Email: daisy1@gmail.com <button className="edit-button">✏️</button></p>
              <p>Address: 23/2A, Kadawatha <button className="edit-button">✏️</button></p>
              <p>Contact Number: 073-909091 <button className="edit-button">✏️</button></p>
            </div>

            <div className="emergency-contact-info">
              <h4>Emergency Contact Info</h4>
              <p>Contact Name: Melissa <button className="edit-button">✏️</button></p>
              <p>Contact Number: 077-3245651 <button className="edit-button">✏️</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default Profile;
