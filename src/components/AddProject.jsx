import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddProject() {
  const [show, setShow] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    title:"",
    language:"",
    github:"",
    website:"",
    overview:"",
    projectimg:""
  })
  console.log(projectDetails);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button className='btn btn-success' onClick={handleShow}>Add Project</button>
    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
            <label htmlFor="projImg">
              <input id='projImg' type="file" style={{display:'none'}}/>
              <img src="https://www.svgrepo.com/show/454419/eog-image-photo.svg" alt="no image" width={'100%'} />
            </label>
            </Col>
            <Col sm={12} md={6}>

            <form className='p-3'>
              <div className="mb-3">
                <input type="text" placeholder='Title' className='form-control' onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}/>
              </div>
              <div className="mb-3">
              <input type="text" placeholder='Language' className='form-control' onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})}/>
              </div>
              <div className="mb-3">
              <input type="text" placeholder='GitHub' className='form-control' onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})}/>
              </div>
              <div className="mb-3">
              <input type="text" placeholder='Website' className='form-control' onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})}/>
              </div>
              <div className="mb-3">
              <textarea placeholder='OverView' className='form-control' rows={'4'} onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}></textarea>
              </div>
            </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject