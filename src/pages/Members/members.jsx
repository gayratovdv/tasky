import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Sidebar from '../../components/Sidebar/sidebar'

const MembersPage = () => {
  return (
    <div className='main'>
      <Sidebar />
      <div className="content">
        <Navbar />
        <div className="content-main">
          Members
        </div>
      </div>
    </div>
  )
}

export default MembersPage
