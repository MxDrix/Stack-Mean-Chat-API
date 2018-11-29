/*
Imports
*/
const express = require('express');
const chatRouter = express.Router({ mergeParams: true });
const { newMessage, deleteMessage, chargeNews} = require('./chat.controller');
//

/*
Routes definition
*/
class ChatRouterClass {
    routes(){
        // HATEOAS
        chatRouter.get('/', (req, res) => {
            res.json('No chat here !');
        });
        
        // Creer un message 
        chatRouter.post('/newMessage', (req, res) => {
            // Use controller function
            newMessage(req.body)
            .then( apiResponse => res.json(apiResponse) )
            .catch( apiResponse => res.json(apiResponse) )
        });

        // Suppriemr Message
        chatRouter.post('/deleteMessage', (req, res) => {
            // Use controller function
            deleteMessage(req.body)
            .then( apiResponse => res.json(apiResponse) )
            .catch( apiResponse => res.json(apiResponse) )
        });

        // Charger nouveau message
        chatRouter.post('/chargeNews', (req, res) => {
            // Use controller function
            chargeNews(req.body)
            .then( apiResponse => res.json(apiResponse) )
            .catch( apiResponse => res.json(apiResponse) )
        });
    };

    init(){
        this.routes();
        return chatRouter;
    }
}
//

/*
Export
*/
module.exports = ChatRouterClass;
//