const bcrypt = require('bcrypt')

const hashPassword = (PlainPassword) => {
    return bcrypt.hashSync(PlainPassword, 10)

}

const comparePassword = (plainPassword, hashPassword, done) => {
    return bcrypt.compareSync(plainPassword, hashPassword, done)
    
}



module.exports = {
    hashPassword,
    comparePassword
}