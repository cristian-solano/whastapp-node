const sequelize = require('../database/models/index').sequelize;

const initModels = require('../database/models/init-models');
const participants = require('../database/models/participants');
const conversations = require('../database/models/conversations');
const message = require('../database/models/message');
const models = initModels(sequelize)


const getAllConversationsById = async (phone) => {
// get. post.
    const conversation = await conversations.findOne(phone)

    return conversation
}

const editConversations = async (phone, data) => {
// put.
    const conversation = await conversations.update(data, {
        where : {
            phone
        }
    })

    return { 
        message: `Conversación con el telefono: ${phone} editado satisfactoriamente`,
        conversation    
    }   
}

const deleteConversation = async(phone) => {
// delete.
    try {
        const conversation = await conversations.destroy({
            where: {
                phone
            }
        })
        return  {
            message: `Conversacion con el telefono ${phone} eliminado`,
            conversation
            
            
        }
    } catch (error) {
        return error
    }
}

const getMessageByUser = async(conversation_id) => {
// get. post.
    const messages = await message.findOne(conversation_id)
    return messages
}
   



const getParticipans = async (conversation_id) => {
// get. post.
    const participant = await participants.findAll(conversation_id)
    return participant
}

module.exports = {
    getAllConversationsById,
    editConversations,
    deleteConversation,
    getMessageByUser,
    getParticipans

}