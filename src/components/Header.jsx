import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header({dash}) {
  return (
    <div>
      <Navbar className="row p-4 bg-success">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand className='text-light fs-3 ms-5'>
            <FontAwesomeIcon icon={faStackOverflow} size="lg" className='me-3'/>
              Project FAIR
            </Navbar.Brand>
          </Link>
          {dash && <button className='btn btn-warning me-5'><FontAwesomeIcon icon={faPowerOff} className='me-2'/>Logout</button>}
        </Container>
      </Navbar>
    </div>
  )
}

export default Header