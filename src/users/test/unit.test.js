const { assert } = require("chai");
const { describe, it, before } = require("mocha");
const { toPromise } = require("../../tools/toPromise");


const userControllers = require('../users.controller')

before( () => {

    userControllers.registerUser({
        firstname: 'cristian',
        lastname:  'solano',
        email: 'cristian@gmail.com',
        password: '1234',
        phone: '+573013014488'
       
    })
    
})



describe('Suite de testing unitario para el controlador de edición Users', () => {
    it('Should return correctly the body', async(done) => {
        const body = {
            
            firstname: 'cristian',
            lastname:  'Gonzales',
            email: 'cristian@gmail.com',
            password: 'root',
            phone: '+573013014488'

        }
        const user =  await toPromise(userControllers.getUserByNumber(body.phone))
        console.log('Mi resultado:', user[0].dataValues)
        const result =  await toPromise(userControllers.editUser(user.id, body))
        
        assert.equal(result.id, user.id)
        assert.equal(result.firstname, body.firstname)
        assert.equal(result.lastname, body.lastname)
        assert.equal(result.email, body.email)
        assert.equal(result.phone, body.phone)
        done()
    })
    // it('Should return error with not existing id')

})