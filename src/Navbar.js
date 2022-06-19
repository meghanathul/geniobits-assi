import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>

      <div className='Nav-div'>
        <h1 style={{ top: '30px', position: 'relative', left: '30px' }}>Orange<span style={{ color: 'green', top: '2px', position: 'relative' }}>HRM</span></h1>
        <input type='text' className='input' placeholder='Search' />
        <button style={{ position: 'relative', right:'40px',borderRadius:'40px',top: '50px', width: '50px', height: '30px',  }}>serch</button>
        <ul style={{ position: 'relative', top: '100px' }}>
          <li>Admin</li>
          <li>PIM</li>
          <li>Leave</li>
          <li>Time</li>
          <li>My Info</li>
          <li>Dashboard</li>
          <li>Directory</li>
          <li>Maintance</li>
          <li>Buzz</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar