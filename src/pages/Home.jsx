import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import titleimage from '../assets/home-image.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="container-fluid bg-success" style={{height:'100vh'}}>
      <Row className='align-items-center p-5'>
        <Col xs={12} md={6} className='ps-5'>
        <h1 className='text-light' style={{fontSize:'70px'}}>Project Fair</h1>
        <p className='mt-4'>One stop destination for all software developement Projects</p>
        <button className='btn btn-warning mt-4'>Get started <FontAwesomeIcon icon={faArrowRight} className='ms-2'/></button>
        <button className='btn btn-warning mt-4'>ManageProject <FontAwesomeIcon icon={faArrowRight} className='ms-2'/></button>
        </Col>
        <Col xs={12} md={6}>
        <img src={titleimage} alt="no image" className='w-75' style={{marginTop:'100px'}}/>
        </Col>
      </Row>
    </div>

    <div className="container-fluid">
      <h1 className='text-center mt-5'>Explore Our Projects</h1>
      <div className="row mt-4">
        <div className="col-md-4 p-4">
          <ProjectCard/>
        </div>
        <div className="col-md-4 p-4">
          <ProjectCard/>
        </div>
        <div className="col-md-4 p-4">
          <ProjectCard/>
        </div>
      </div>
      <Link to={'/projects'} className='text-center text-danger'><h5 className='mb-4'>See More Projects</h5></Link>
    </div>
    </>
  )
}

export default Home