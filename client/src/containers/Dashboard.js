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
                <div className='row mt-3 text-center card-header'>
                    Meredith's Portfolio
                </div>
                <div className='card row ovo stk'>
                    {all_posts.map(post => (
                    <PostCard post={post} key={post.id}/>
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