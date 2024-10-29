import "./Styles/Admindashboard.css"
import "./App.css"
import React, { useState, useEffect } from 'react';



const AdminDashboard = ({isSidebarVisible,toggleSidebar }) => {
 

  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  

  return (

    <div >
        <div>
            {!isSidebarVisible && (
                <button className="show-sidebar-button" onClick={toggleSidebar}>
                     Show Sidebar
                </button>
            )}
        </div>

        <div className="date-div">
            <header >
                <span className="date">Date: {currentDate}</span>
            </header>
        </div>

        <div className="btn-emp-reg">
            <button>register employee</button>
        </div>

    </div>
           

    

  );
};

export default AdminDashboard;
