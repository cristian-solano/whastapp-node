const usersControllers = require('../users/users.controller')

//?  `/users`

//?   `/users/:uuid`

//?  `/users/me`

const getAllUser = async (req, res) => {
    const users = await usersControllers.getAllUsers(req.params.body)
    res.status(200).json({users})
}

const getUserByNumber = async(req, res) => {
    const  [user, err] = await usersControllers.getUserByNumber(req.params.phone)
    res.status(200).json(user)

    if(err || !user){
        return res.status(404).json({
            message: 'Numero incorrecto'
        })
    }
}

const editUser = async(req, res) => {
    const number = req.params.phone
    const body = req.users.id
    res.status(200).json(usersControllers.editUser(number, body))
}

const DeleteUser = async(req, res) => {
    const number = req.params.phone
    usersControllers.deleteUser(number)
    res.status(204).json({
        message: 'Eliminado el usuario'
    })
}


module.exports = {
    getAllUser, 
    getUserByNumber,
    editUser,
    DeleteUser

}