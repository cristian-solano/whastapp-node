const { toPromise } = require("../tools/toPromise")
const participantsControllers = require('./participants.controller')

const getAll = async (req, res) => {
    const [data, err] = await toPromise(participantsControllers.getAllParticipants(req.params.uuid))
    if(!err || data){
       
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: 'error'})
    }
   
}

const getConversationInfo  = async (req, res) => {

    const [data, err] = await toPromise(participantsControllers.getConversationInfo(req.params.uuid))
    console.log(data)
    if(!err || data){
       
        res.status(200).json(data)

    } else {
        res.status(400).json({message: 'error'})
    }
}

module.exports = {
    getAll, 
    getConversationInfo
}




