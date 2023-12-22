import { responder } from "./../util.js";

const getApiHealth = async (req, res)=>{

     return responder({res, success: true, message: 'Server is running' })

}

export {getApiHealth};