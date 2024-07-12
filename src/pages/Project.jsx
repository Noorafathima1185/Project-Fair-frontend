import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '../components/ProjectCard'

function Project() {
  return (
    <>
    <Header/>
    <h1 className='text-center mt-5'>Projects</h1>

    <div className="row w-100 mt-5">
      <div className="col-md-4"></div>
      <div className="col-md-4 d-flex">
        <input type="text" placeholder='Technologies' className='form-control' />
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginTop:'12px',marginLeft:'-30px'}} flip='horizontal' className='text-secondary'/>
      </div>
      <div className="col-md-4"></div>
    </div>

    <div className="container-fluid mt-5 d-flex p-5">
      <div className="col-md-4">
        <ProjectCard/>
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-4"></div>
    </div>

    <p className='text-center text-danger mt-5 fs-3 mb-4'>No Project To Display</p>
    </>
  )
}

export default Project