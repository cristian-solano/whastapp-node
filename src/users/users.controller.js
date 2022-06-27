const crypto = require('../tools/crypto');
const uuid = require('uuid');
const sequelize = require('../database/models/index').sequelize;
const initModels = require('../database/models/init-models');

const models = initModels(sequelize);


const registerUser = (data) => {
//  post.
const hashedPassword = crypto.hashPassword(data.password);
const userId = uuid.v4();
const newUser =  models.users.create({
    id: userId,
    ...data,
    password: hashedPassword
})
return {
    message: `Bienvenido tu identificador es: ${userId}`,
    user: newUser
    };
}

// registerUser({
//     firstname : 'cristian',
//     lastname: 'solano',
//     email: 'cris@hotmail.com',
//     password: 'uuid',
//     phone: '+57123456789'

// });

const getUserByNumber = async (phone) => {
//  get.
    const user = await models.users.findOne({
        where: {phone},
        attributes: {
            exclude: ["password"]
        }
    })
    return user
}

const getAllUsers = async () => {
// get. 
    const users = await models.users.findAll({
        attributes : {
            exclude: ["password"]
        }
    })
    return users 
}

const editUser = async (id, data) => {
// put.
    const user = await models.users.update(data, {
        where: {
            id
        }
    })
    return {
        message: `Usuario con el id: ${id} editado satisfactoriamente`,
        user: user
    }
}

const deleteUser = async (id) =>{
// delete.    
    try {
        const user = await models.users.destroy({
            where: id
        })
        return {
            message: `Usuario con el id ${id} eliminado satisfactoriamente`,
            user
        }
    } catch (error) {
        return error
        
    }
}

module.exports = {
    registerUser,
    getUserByNumber,
    getAllUsers,
    editUser,
    deleteUser
}
