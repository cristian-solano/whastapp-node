const router = require('express').Router();
const userHttpHandler = require('./conversation.http')


router.route('/')
    .get(userHttpHandler.getAllConversations)

router.route('/:id')
    .get(userHttpHandler.getConversationById)
    .put(userHttpHandler.editConversations)
    .delete(userHttpHandler.deleteConversation)

router.route('/:id/messages')
    .get(userHttpHandler.getMessages)
    



module.exports = {
    router
}