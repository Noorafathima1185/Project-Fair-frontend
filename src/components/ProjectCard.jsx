import React from 'react'
import Card from 'react-bootstrap/Card';
import country from '../assets/country.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { serverUrl } from '../services/serverUrl';


function ProjectCard({projects}) {
  // console.log(projects);

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
   <>
   <Card style={{ width: '100%' }} className='shadow' onClick={handleShow}>
      <Card.Img variant="top" src={`${serverUrl}/uploads/${projects.projectimg}`} width={'100%'}/>
      <Card.Body>
        <Card.Title className='text-center'>{projects.title}</Card.Title>
      </Card.Body>
    </Card>


      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{projects.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
            <img src={`${serverUrl}/uploads/${projects.projectimg}`} alt="no image" width={"100%"}/>
            </Col>
            <Col sm={12} md={6}>
            <h4>Discription</h4>
            <p>{projects.overview}</p>
            <h4 className='mt-3'>Technologies:</h4>
            <p>{projects.language}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-start'>
          <Link to={projects.github}><FontAwesomeIcon icon={faGithub} size='xl'/></Link>
          <Link to={projects.website}><FontAwesomeIcon icon={faLink} size='xl' className='ms-3'/></Link>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default ProjectCard