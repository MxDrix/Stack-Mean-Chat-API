/*
Imports
*/
const express = require('express');
const chatRouter = express.Router({ mergeParams: true });
const { newMessage, deleteMessage, chargeNews} = require('./chat.controller');
const { checkFields } = require('../../services/request.checker');
const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
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
            if( typeof req.body === 'undefined' || req.body === null ) { sendBodyError(res, 'No param provided') }
            // Use controller function
            const { miss, extra, ok } = checkFields(['nom', 'email_user', 'content'], req.body); 

            if( !ok ){ sendFieldsError( res, 'Bad fields provided', miss, extra ) }

            // Use controller function
            newMessage(req.body)
            .then( apiResponse => sendApiSuccessResponse(res, 'New message created',apiResponse) )
            .catch( apiResponse => sendApiErrorResponse(res, 'Error message no create ',apiResponse) )
        });

        // Suppriemr Message
        chatRouter.post('/deleteMessage', (req, res) => {
            if( typeof req.body === 'undefined' || req.body === null ) { sendBodyError(res, 'No param provided') }
            // Use controller function
            const { miss, extra, ok } = checkFields(['_id', 'email_user'], req.body); 

            if( !ok ){ sendFieldsError( res, 'Bad fields provided', miss, extra ) }
            // Use controller function
            deleteMessage(req.body)
            .then( apiResponse => sendApiSuccessResponse(res, 'Message delete ',apiResponse) )
            .catch( apiResponse => sendApiErrorResponse(res, 'Error message not delete ',apiResponse) )
        });

        // Charger nouveau message
        chatRouter.post('/chargeNews', (req, res) => {
            // Use controller function
            chargeNews(req.body)
            .then( apiResponse => sendApiSuccessResponse(res, 'Show all message',apiResponse) )
            .catch( apiResponse => sendApiErrorResponse(res, 'Error no message to show',apiResponse) )
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