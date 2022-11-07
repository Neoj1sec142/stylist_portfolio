import {GetPosts, GetPostById} from '../actions/post'
import {
    LOAD_POSTS_SUCCESS, LOAD_POSTS_FAIL,
    LOAD_POST_BY_ID_SUCCESS, LOAD_POST_BY_ID_FAIL
} from '../types'

export const load_posts = () => async dispatch => {
    try{
        const res = GetPosts()
        console.log(res, "ALL POST RES")
        if(res.status === 200){
            dispatch({
                type: LOAD_POSTS_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_POSTS_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_POSTS_FAIL
        })
    }
}

export const load_post_by_id = (id) => async dispatch => {
    try{
        const res = GetPostById(id)
        console.log(res, "ALL POST RES")
        if(res.status === 200){
            dispatch({
                type: LOAD_POST_BY_ID_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_POST_BY_ID_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_POST_BY_ID_FAIL
        })
    }
}