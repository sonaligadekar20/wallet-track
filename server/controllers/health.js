const getApiHealth = async (req, res)=>{
    res.json({
        success: true,
        message: 'Server is running'
    })
}

export {getApiHealth};