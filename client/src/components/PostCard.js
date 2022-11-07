// title img description techniques date_added
import React from 'react'

const PostCard = ({post}) => {
    return(
        <a href={`/portfolio/${post.id}`} className='nolink'><div className='card m-2'>
            <p className='card-header'>{post.title} | {post.date_added.slice(0,10)}</p>
            <img src={post.img} alt=''/>
            <p className='text-muted text-center'>{post.description}</p>
            <p className='card-text text-center'>{post.techniques}</p>
        </div></a>
    )
}
export default PostCard