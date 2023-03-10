const { default: axios } = require("axios");
const {API_URL} = require('../constants');

exports.getUsers = async (req, res)=>{
    try {
        const users = await axios.get(`${API_URL}/users`)
    
        res.status(200).json({
            success: true,
            status: 200,
            data: users.data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Something went wrong",
            data: null
        })
        
    }
}

exports.getUser = async(req, res)=>{
    const {id} = req.params;
    
    
    
    try {
        const user = await axios.get(`${API_URL}/users/${id}`)
    
        res.status(200).json({
            success: true,
            status: 200,
            data: user.data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Something went wrong",
            data: null
        })
        
    }
}