import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SkillCard from '../components/SkillCard'
import {load_skills} from '../store/actions/skill'

const SkillDash = ({load_skills, all_skills}) => {
    useEffect(() => {
        load_skills()
    },[])
    console.log(all_skills, "ALL SKILLS")
    if(all_skills.length){
        return(
            <div className='conatiner'>
                <h1 className='text-center mt-3'>Technique Sheet</h1>
                <br />
                {all_skills.map(skill => (
                    <div key={skill.id}>
                        <SkillCard skill={skill} />
                    </div>    
                ))}
            </div>
        )
    }else{
        return(
            <div className='card text-center sqsh'>Loading....</div>
        )
    }
}

const mapStateToProps = state => ({
    all_skills: state.skill.all_skills
})

export default connect(mapStateToProps, {load_skills})(SkillDash);