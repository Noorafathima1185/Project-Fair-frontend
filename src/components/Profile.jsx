import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Collapse from 'react-bootstrap/Collapse';
import React, {useState} from 'react'


function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="mx-3 p-3 shadow rounded" onMouseEnter={()=>setOpen(true)}>
      <div className="d-flex justify-content-between">
        <h4 className='text-success'>Profile</h4>
        <button  onClick={() => setOpen(!open)}  type='button' className='btn btn-outline-info mb-3'>
          {!open? <FontAwesomeIcon icon={faAngleDown}/>:
          <FontAwesomeIcon icon={faAngleUp} />}
          </button>
      </div>

      <Collapse in={open}>
        <div>
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <label htmlFor="profileImg">
              <input id='profileImg' type="file" style={{display:'none'}}/>
              <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" alt="profile image" style={{width:'170px', height:'170px', borderRadius:'50%'}}/>
            </label>
    
            <form className='mt-4 w-100'>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='GitHub'/>
              </div>
              <div className="mb-3">
              <input type="text" className='form-control' placeholder='LinkedIn'/>
              </div>
              <div className="mb-3">
                <button className='btn btn-success w-100'>Update</button>
              </div>
            </form>
          </div>
        </div>
      </Collapse>
    </div>
    </>
  )
}

export default Profile