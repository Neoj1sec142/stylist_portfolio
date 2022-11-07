import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {load_post_by_id} from '../store/actions/post'
const DetailPage = ({post, load_post_by_id}) => {
    const {id} = useParams()
    useEffect(() => {
        load_post_by_id(id)
    },[])
    console.log(post, "POST ON PAGE")
    return(
        <div></div>
    )
}

const mapStateToProps = state => ({
    post: state.post.post
})

export default connect(mapStateToProps, {load_post_by_id})(DetailPage)