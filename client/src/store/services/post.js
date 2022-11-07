import Client from "./api";
// Blog Post Services
export const GetPosts = async () => {
    try{
        const res = await Client.get('posts/')
        console.log(res, "BLOG RES")
        return res
    }catch(err){console.log(err)}
}

export const GetPostById = async (id) => {
    try{
        const res = await Client.get(`posts/${id}/`)
        return res
    }catch(err){console.log(err)}
}

export const GetPostByUserId = async (id) => {
    try{
        const res = await Client.get(`posts/${id}/`)
        // console.log(res)
        return res
    }catch(err){console.log(err)}
}