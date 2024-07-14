import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProject from '../components/MyProject'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <>
    <Header dash={true}/>

    <h3 className='mt-3 ms-3'>Welcome <span className='text-warning'>User</span></h3>

    <Row className='mt-3 container-fluid p-5'>

      <Col sm={12} md={8}>
      <MyProject/>
      </Col>

      <Col sm={12} md={4}>
      <Profile/>
      </Col>

    </Row>
    </>
  )
}

export default Dashboard