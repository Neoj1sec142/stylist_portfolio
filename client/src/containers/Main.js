import React from 'react'

const Main = () => {
    return(
        <div className='container'>
            <div className='card mt-3 mb-3 text-center'>
                <h2 className='card-header'>Meredith Harmon</h2>
                <p className='card-text mt-2'>Licensed Cosmotologist</p>
                <hr className='divider' />
                <div className='card sqsh'>
                {/* <img src="" alt="" /> */}
                </div>
                <a href='/portfolio' className='btn btn-outline-primary'>View Meredith's Portfolio</a>
                <br/>
            </div>
        </div>
    )
}
export default Main