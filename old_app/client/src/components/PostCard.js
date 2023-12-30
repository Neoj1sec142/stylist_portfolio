// title img description techniques date_added
import React from 'react'

const PostCard = ({post}) => {
    
    return(
        <a href={`/portfolio/${post.id}`} className='nolink rl'><div className='card m-2 rl'>
            <p className='card-header'>{post.title} | {post.date_added.slice(0,10)}</p>
            <img src={post.img} alt='' className='img-thumbnail sqshy'/>
            <p className='text-muted text-center'>{post.description}</p>
        </div></a>
    )
}

export default PostCard