const { toPromise } = require('../tools/toPromise');
const userControllers = require('../users/users.controller')
const crypto = require('../tools/crypto');


const checkUsersCredential = async (phone, password) => {
    const [user, err] = await toPromise(userControllers.getUserByNumber(phone))
    if(!err && user.dataValues){
        return crypto.compaarePassword(password, user.password)
    }else {
        return null
    }
}

module.exports = {
    checkUsersCredential
}