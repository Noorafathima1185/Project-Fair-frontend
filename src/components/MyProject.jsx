import React from 'react'
import AddProject from '../components/AddProject'
import EditProject from '../components/EditProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function MyProject() {
  return (
    <div className='shadow px-4 py-4 rounded'>
      <div className='d-flex justify-content-between'>
        <h4 className='text-success'>My Project</h4>
        <AddProject/>
      </div>

      <div className='mt-4 p-3 bg-light rounded d-flex justify-content-between'>
        <h5>Media Player</h5>

        <div className='d-flex align-items-center'>
          <EditProject/>
          <FontAwesomeIcon icon={faGlobe} className='text-warning ms-3'/>
          <FontAwesomeIcon icon={faGithub} className='text-success ms-3'/>
          <FontAwesomeIcon icon={faTrash} className='text-danger ms-3 me-5'/>
        </div>
      </div>
    </div>
  )
}

export default MyProject