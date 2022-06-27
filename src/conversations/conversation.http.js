const conversationControllers = require('../conversations/conversation.controller')

//?  `/conversations`
//?`/conversations/:uuid`
//?`/conversations/:uuid/messages`
//?`/conversations/:uuid/participants`


const getAllConversations = async (req, res) => {
    const [conversation, err] = await conversationControllers.getAllConversationsByUser(req.params.uuid)
    res.status(200).json(conversation)
    if(err || !conversation){
        return res.status(401).json({
            message: 'Los datos no existen'
        })
    }
}

const getConversationById = async (req, res) => {
    const [id, err] = await conversationControllers.getAllConversationsById(req.params.uuid)
    const conversation = req.conversation.title
    res.status(200).json({
        id,
        conversation
    })

    if(err || !id){
        return res.status(400).json({
            message: 'Esta conversacion no existe'
        })
    }
}

const deleteConversation = async (req,res) => {
    const [conversation, id] = await conversationControllers.deleteConversation(req.params.uuid)
        res.status(200).json(conversation, {
        message : 'Conversacion eliminada'
        
    })
    
    if(req.conversation.id !== id){
        res.status(400).json({
            status: 400,
            message: 'La conversación que quieres eliminar no existe'
        })
    }; 
    
};   

const editConversations = async (req, res) => {
    const conversation = await conversationControllers.editConversations(req.params.uuid)
    res.status(200).json({
        conversation,
        message: 'editado'
    })
}

const getMessages = async (req, res) => {
    const [message] = await conversationControllers.getMessageByUser(req.params.uuid)
    res.status(200).json({
        message: message   
    })
    
}
const getParticants = async (req, res) => {
    const participants = await conversationControllers.getParticipans(req.params.uuid)
    res.status(200).json(participants)
}

module.exports = {
    getAllConversations,
    getConversationById,
    deleteConversation,
    editConversations,
    getParticants, 
    getMessages
}

