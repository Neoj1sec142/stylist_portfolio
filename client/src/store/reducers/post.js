/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_POSTS_SUCCESS, 
    LOAD_POSTS_FAIL,
    LOAD_POST_BY_ID_SUCCESS,
    LOAD_POST_BY_ID_FAIL,
} from '../types'

const initialState = {
    all_posts: [],
    post: {}
}

export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){    
        case LOAD_POST_BY_ID_SUCCESS:
            return{
                ...state,
                post: payload
            }
        case LOAD_POSTS_SUCCESS:
            return{
                ...state,
                all_posts: payload
            }
        case LOAD_POST_BY_ID_FAIL:
        case LOAD_POSTS_FAIL:
            return {...state}
        default:
            return state
    }
}