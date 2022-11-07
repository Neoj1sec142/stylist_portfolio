import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PostCard from '../components/PostCard'
import {load_posts} from '../store/actions/post'

const Dashboard = ({load_posts, all_posts}) => {
    useEffect(() => {
        load_posts()
    },[])
    
    if(all_posts.length){
        return(
            <div className='conatiner-fluid'>
                <div className='row mt-3'>
                    User Profile Row
                </div>
                <div className='row d-flex flex-direction-column'>
                    {all_posts.map(post => (
                    <div key={post.id}>
                    <PostCard post={post} />
                    </div>
                    ))}
                </div>
            </div>
        )
    }else{
        return(
            <div className='card text-center sqsh'>Loading....</div>
        )
    }
}

const mapStateToProps = state => ({
    all_posts: state.post.all_posts
})

export default connect(mapStateToProps, {load_posts})(Dashboard);