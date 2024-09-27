import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar';
import Navbar from '../../components/Navbar/navbar';

const DashboardPage = () => {
  return (
    <div className='main'>
      <Sidebar />
      <div className="content">
        <Navbar />
        <div className="content-main">
          
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
