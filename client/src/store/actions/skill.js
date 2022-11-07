import {GetSkills, GetSkillById} from '../services/skill'
import {
    LOAD_SKILLS_SUCCESS, LOAD_SKILLS_FAIL,
    LOAD_SKILL_BY_ID_FAIL, LOAD_SKILL_BY_ID_SUCCESS
} from '../types'

export const load_skills = () => async dispatch => {
    try{
        const res = await GetSkills()
        console.log(res, "GET ALL RES")
        if(res.status === 200){
            dispatch({
                type: LOAD_SKILLS_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_SKILLS_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_SKILLS_FAIL
        })
    }
}

export const load_skill_by_id = (id) => async dispatch => {
    try{
        const res = GetSkillById(id)
        console.lod(res, "GET BY ID RES")
        if(res.status === 200){
            dispatch({
                type: LOAD_SKILL_BY_ID_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_SKILL_BY_ID_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_SKILL_BY_ID_FAIL
        })
    }
}