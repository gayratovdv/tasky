import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Sidebar from '../../components/Sidebar/sidebar'

const ProfilePage = () => {
  return (
    <div className='main'>
      <Sidebar />
      <div className="content">
        <Navbar />
        <div className="content-main">
          Profile
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
