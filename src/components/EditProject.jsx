import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { serverUrl } from '../services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectApi } from '../services/allApi';
import { editResponseContext } from '../context/DataShare';


function EditProject({project}) {
  const [show, setShow] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    id:project?._id,
    title:project?.title,
    language:project?.language,
    github:project?.github,
    website:project?.website,
    overview:project?.overview,
    projectimg:""
  })
  const [preview, setPreview] = useState("")
  const [key, setKey] = useState(0)
  const {setEditResponse} = useContext(editResponseContext)

  const handleClose = () => {setShow(false);
    handleClose1()
  }
  const handleShow = () => setShow(true);
  console.log(projectDetails);

  const handleFileUpload = (e)=>{
    e.preventDefault()
    setProjectDetails({...projectDetails, projectimg:e.target.files[0]})
  }

  useEffect(()=>{
    if(projectDetails.projectimg){
      setPreview(URL.createObjectURL(projectDetails.projectimg));
    }
  },[projectDetails.projectimg])

  const handleClose1 = ()=>{
    setProjectDetails({
    title:project.title,
    language:project.language,
    github:project.github,
    website:project.website,
    overview:project.overview,
    projectimg:""
    })
    setPreview("")
    if(key==0){
      setKey(1)
    }
    else{
      setKey(0)
    }
  }

  const handleUpdate = async(e)=>{
    e.preventDefault()

    const {id, title, language, github, website, overview} = projectDetails
    if(!title || !language || !github || !website || !overview){
    toast.error('Please fill the form completely')
    }
    else{
      const reqBody = new FormData()

      reqBody.append("title",title)
      reqBody.append("language",language)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      preview?reqBody.append("projectimg", projectimg):reqBody.append("projectimg",project.projectimg)

      const token = sessionStorage.getItem("token")

      if(preview){ // if there is new image upload
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        const result = await editProjectApi(id,reqBody,reqHeader)
        console.log(result);
        if(result.status==200){
          toast.success('Project updated successfully')
          handleClose()
          setEditResponse(result.data)
        }
        else{
          toast.error('Something went to wrong')
        }

      }
      else{
        const reqHeader = { // no new image upload
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await editProjectApi(id,reqBody,reqHeader)
        console.log(result);
        if(result.status==200){
          toast.success('Project updated successfully')
          handleClose()
          setEditResponse(result.data)
        }
        else{
          toast.error('Something went to wrong')
        }
    }
  }
}

  return (
    <>
    <FontAwesomeIcon icon={faPenToSquare} className='text-info' onClick={handleShow}/>

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
            <label htmlFor="projImg">
              <input id='projImg' type="file" style={{display:'none'}} key={key} onChange={handleFileUpload} />
              <img src={preview?preview:`${serverUrl}/uploads/${project?.projectimg}`} alt="no image" width={'100%'} />
            </label>
            </Col>
            <Col sm={12} md={6}>

            <form className='p-3'>
              <div className="mb-3">
                <input type="text" placeholder='Title' className='form-control' value={projectDetails?.title} onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}/>
              </div>
              <div className="mb-3">
              <input type="text" placeholder='Language' className='form-control' value={projectDetails?.language} onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})}/>
              </div>
              <div className="mb-3">
              <input type="text" placeholder='GitHub' className='form-control' value={projectDetails?.github} onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})}/>
              </div>
              <div className="mb-3">
              <input type="text" placeholder='Website' className='form-control' value={projectDetails?.website} onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})}/>
              </div>
              <div className="mb-3">
              <textarea placeholder='OverView' className='form-control' rows={'4'} value={projectDetails?.overview} onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}></textarea>
              </div>
            </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default EditProject