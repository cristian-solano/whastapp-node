const authControllers = require('./auth.controller');
const userControllers = require('../users/users.controller');
const config = require('../config');
const jwt = require('jsonwebtoken');
const { toPromise } = require('../tools/toPromise');

const loginUser = async(req, res) => {
    if(!req.body){
        return res.status(400).json({message: "No hay datos"})
    }else if (!req.body.phone || !req.body.password){
        return res.status(400).json({message: "Sin datos"})
    }

    const [response, error] = await toPromise(authControllers.checkUsersCredential(req.body.phone, req.body.password))
    if(error || !response){
        return res.status(401).json({message: "Credencial invalida"})
    }

    const [user, err] = await toPromise(userControllers.getUserByNumber(req.body.phone))
    if(err || !user){
        return res.status(401).json({message: "Credencial invalida"})
    }

    const token = jwt.sign({
        id: user.id,
        number: req.body.phone
    }, config.jwtSecret)
    res.status(200).json({token: token})
}



module.exports = {
    loginUser
}