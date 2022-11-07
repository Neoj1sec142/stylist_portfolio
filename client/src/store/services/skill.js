import Client from "./api";

export const GetSkills = async () => {
    try{
        const res = await Client.get('skills/')
        console.log(res, "BLOG RES")
        return res
    }catch(err){console.log(err)}
}

export const GetSkillById = async (id) => {
    try{
        const res = await Client.get(`skills/${id}/`)
        return res
    }catch(err){console.log(err)}
}

export const GetSkillByUserId = async (id) => {
    try{
        const res = await Client.get(`skills/${id}/`)
        // console.log(res)
        return res
    }catch(err){console.log(err)}
}
