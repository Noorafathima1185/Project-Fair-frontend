import { faFacebook, faInstagram, faLinkedinIn, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className="row p-3 bg-success">

            <div className="col-md-4 p-5">
                <h5 className='text-light'><FontAwesomeIcon icon={faStackOverflow} size="lg" className='me-3'/>Project FAIR</h5>
                <p style={{ textAlign: 'justify ' }} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum ut a hic rerum doloribus neque, placeat nostrum laudantium tempora inventore quia culpa totam consequatur nemo ipsum harum doloremque at?</p>
            </div>

            <div className="col-md-2 d-md-flex justify-content-center p-5">
                <div>
                    <h5 className='text-light'>Links</h5>
                    <p className='mt-4'><Link to={'/'} style={{color:'black'}}>Home Page</Link></p>
                    <p><Link to={'/project'} style={{color:'black'}}>Project Page</Link></p>
                    <p><Link to={'/dashboard'} style={{color:'black'}}>DashBoard</Link></p>
                </div>
            </div>

            <div className="col-md-2 p-5">
                <div>
                    <h5 className='text-light'>Guides</h5>
                    <p className='mt-4'>React</p>
                    <p>React Bootstrap</p>
                    <p>Bootswatch</p>
                </div>
            </div>

            <div className="col-md-3 p-5">
                <h5 className='text-light'>Contact Us</h5>
                <div className='d-flex mt-4'>
                    <input type="text" placeholder='Email id' className='form-control' />
                    <button className='btn btn-warning ms-2'>Subscribe</button>
                </div>
                <div className="d-flex justify-content-around mt-3 text-light">
                <FontAwesomeIcon icon={faInstagram} size='2xl' />
                <FontAwesomeIcon icon={faFacebook} size="2xl" />
                <FontAwesomeIcon icon={faTwitter} size="2xl" />
                <FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
                </div>
            </div>

            <div className="col-md-1"></div>

        </div>
  )
}

export default Footer