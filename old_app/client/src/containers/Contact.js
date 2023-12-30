import React from 'react'

const Contact = () => {
    return(
        <div className='container-fluid'>
            <div className='card m-3 text-center'>
                <br />
                <p className='card-text'><strong>Name: Meredith Harmon</strong></p>
                <p className='card-text'>Email: meredithswanson96@yahoo.com</p>
                <p className='card-text'>Phone: (630) 636 8155</p>
                <p className='card-text'>Education: Paul Mitchell</p>
                <p className='card-text'>Title: Licensed Cosmotologist</p>
                <hr className='divider sqsh' />
                <button className='btn btn-outline-success'>Download Resume</button>
            </div>
            <br/>
        </div>
    )
}

export default Contact;