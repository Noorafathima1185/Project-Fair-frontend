import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Auth() {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center flex-column' style={{height:'100vh'}}>
      <div className="container w-75">
        <Link to={'/'} style={{textDecoration:'none'}} className='text-warning'><FontAwesomeIcon icon={faArrowLeft} /> Back To Home</Link>
  
        <div className="bg-success p-3 mt-3 rounded">
          <Row>
            <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-items-center'>
            <img src="https://cdn3.iconfinder.com/data/icons/business-and-seo-2/512/80-256.png" alt="no image" className='w-75'/></Col>
            <Col sm={12} md={6} className='d-flex justify-content-center align-items-center text-light flex-column'>
            <h3><FontAwesomeIcon icon={faStackOverflow} className='me-2 fs-2'/>Project Fair</h3>
            <h5>Sign Up To Your Account</h5>
            <h5>Sign In To Your Account</h5>

            <form className='mt-4 w-75'>
              <div className="mb-3">
                <input type="text" placeholder='Username' className='form-control'/>
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Email' className='form-control'/>
              </div>
              <div className="mb-3">
              <input type="text" placeholder='Password' className='form-control'/>
              </div>
              <div className="mb-3">
                <button className='btn btn-warning w-100'>Register</button>
                <p>Already a User? Click here to <Link to={'/login'} className='text-danger'>Login</Link></p>
                <button className='btn btn-warning w-100 mt-3'>Login</button>
                <p>New User? Click here to <Link to={'/register'} className='text-danger'>Register</Link></p>
              </div>
            </form>
            </Col>
          </Row>
        </div>
      </div>

    </div>
  )
}

export default Auth