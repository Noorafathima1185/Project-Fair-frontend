import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '../components/ProjectCard'
import { allProjectApi } from '../services/allApi'
import { Link } from 'react-router-dom'

function Project() {
  const [istoken, setIsToken] = useState("")
  const [allProject, setAllProject] = useState([])
  const [searchKey, setSearchKey] = useState("")


  const getAllProject = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result = await allProjectApi(searchKey,reqHeader)
      if(result.status==200){
        setAllProject(result.data);
      }
    }
    }
    console.log(allProject);
    

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsToken(sessionStorage.getItem("token"))
    }
  },[])


  useEffect(()=>{
    getAllProject()
  },[searchKey])

  console.log(searchKey);

  return (
    <>
      <Header />
      <h1 className='text-center mt-5'>Projects</h1>

      {istoken?<div>

        <div className="row w-100 mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4 d-flex">
            <input type="text" placeholder='Technologies' className='form-control' onChange={(e)=>setSearchKey(e.target.value)}/>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginTop: '12px', marginLeft: '-30px' }} flip='horizontal' className='text-secondary' />
          </div>
          <div className="col-md-4"></div>
        </div>
  
        {allProject?.length>0?
        <div className="container-fluid mt-5 d-flex p-5">
          <div className='row'>
            {allProject?.map((item)=>(
              <div className="col-md-4 p-4">
              <ProjectCard projects={item}/>
            </div>))}
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
          </div>
           :
        <p className='text-center text-danger mt-5 fs-3 mb-4'>No Project To Display</p>}

      </div>
      :
        <div className="row w-100">
          <div className="col-md-2"></div>
          <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
            <img src="https://www.kindpng.com/picc/m/273-2738790_login-login-logo-hd-png-download.png" alt="no image" />
             <h4 className='mt-4 text-center'>Please <Link to={'/login'} style={{color:'red'}}> Login </Link>to explore more</h4>
          </div>
          <div className="col-md-2"></div>

        </div>}

    </>
  )
}

export default Project