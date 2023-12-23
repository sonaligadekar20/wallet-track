import { responder } from "./../util.js";

const getApiHealth = async (req, res)=>{

     // return responder({res, success: true, message: 'Server is running' })

     return res.status(403).
     json({
          success:true,
          message: "All Good"
     })

}

export {getApiHealth};