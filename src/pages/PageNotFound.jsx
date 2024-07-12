import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function PageNotFound() {
    return (
        <div className='row w-100'>
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div style={{width:'100%'}} className='d-flex justify-content-center align-items-center flex-column'>
                    <img src="https://cdn.dribbble.com/users/1129101/screenshots/3513987/404.gif" alt="no image" width={'100%'}/>
                    <h1>Look's like you're Lost</h1>
                    <button className='btn btn-success mt-4 mb-4'><FontAwesomeIcon icon={faCircleArrowLeft} /> Back to Home</button>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    )
}

export default PageNotFound