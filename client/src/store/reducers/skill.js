/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_SKILLS_SUCCESS, 
    LOAD_SKILLS_FAIL,
    LOAD_SKILL_BY_ID_SUCCESS,
    LOAD_SKILL_BY_ID_FAIL,
} from '../types'

const initialState = {
    all_skills: [],
    skill: {}
}

export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){    
        case LOAD_SKILL_BY_ID_SUCCESS:
            return{
                ...state,
                skill: payload
            }
        case LOAD_SKILLS_SUCCESS:
            return{
                ...state,
                all_skills: payload
            }
        case LOAD_SKILL_BY_ID_FAIL:
        case LOAD_SKILLS_FAIL:
            return {...state}
        default:
            return state
    }
}