import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {load_post_by_id} from '../store/actions/post'
const DetailPage = ({post, load_post_by_id}) => {
    const {id} = useParams()
    useEffect(() => {
        load_post_by_id(id)
    },[])
    
    const {date_added, description, img, techniques, title} = post;
    return(
        <div className='container-fluid'>
            <div className='card mt-3 text-center rl'>
                <img className='img-thumbnail sqshy' src={img} alt=''/>
                <p className='card-header'>{title} | {date_added}</p>
                <hr className='divider sqsh' />
                <p className='card-text'>{description}</p>
                <p className='card-text'>Techniques: {techniques}</p>
                <hr className='divider sqsh' />
                <a href='/portfolio' className='btn btn-danger'>Back</a>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    post: state.post.post
})

export default connect(mapStateToProps, {load_post_by_id})(DetailPage)