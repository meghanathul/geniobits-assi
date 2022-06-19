import React from 'react'

const Data = () => {
  return (
    <div className='main'>
      <div className='upper'>
        <h2 style={{ position: 'relative', left: '350px', top: '10px', color: 'white' }}>PIM</h2>
        <div className='navbar'>
          <div style={{ position: 'relative', left: '300px' }}>
            <span>Configuration</span>
            <span>Employee List</span>
            <span>Add Employee</span>
            <span>Reports</span>
          </div>
        </div>
      </div>
      <div className='emp'>
        <h2 style={{ padding: '10px' ,color:'gray'}}>Add Employee</h2>
        <hr />
        <div className='img'>
        
          <div style={{ width: '150px', marginLeft: '100px', marginTop: '40px', borderRadius: '50%', height: '150px', border: '1px solid' }}></div>
          <span style={{ color: 'gray', left: '40px', top: '30px', fontSize: '1rem', position: 'relative' }}>Accepts jpg,.png,gif up to 1 MB. Recommended<br />dimensions: 200px X 200px </span>
        </div>

        <div className='info'>
          <h2 style={{ padding: '10px' ,color:'gray'}}>
            Employee Full Name*
          </h2>
          <input type='text' className='emp-data' placeholder='First Name' />
          <input type='text' className='emp-data' placeholder='Middle Name' />
          <input type='text' className='emp-data' placeholder='Last Name' />
          <h2 style={{ padding: '10px' ,color:'gray'}}>Employee Id</h2>
          <input type='no' className='emp-data' placeholder='0011' style={{ marginBottom: '20px', width: '300px' }} />

          <hr />
          <div style={{ marginTop: '30px' }}>
            create Login Details  <input style={{ width: '40px' }} type='radio' />
          </div>

        </div>
        <hr />
        <h3 style={{ color: 'gray', padding: '20px' }}>*Required</h3>
        <button className='btn'>Cancle</button>
        <button className='btn'>Save</button>
      </div>


    </div>
  )
}

export default Data