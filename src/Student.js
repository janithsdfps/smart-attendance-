import React from 'react';

import './App.css'
import './sidebar.css' 




function Student({isSidebarVisible,toggleSidebar }) {
  return (

    <div className="dashboard-content">
      {!isSidebarVisible && (
        <button className="show-sidebar-button" onClick={toggleSidebar}>
          Show Sidebar
        </button>
      )}
     

      <div >
        
      </div>
    </div>

    
  );
}

export default Student;
