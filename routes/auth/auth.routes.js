/*
Imports
*/
    const express = require('express');
    const authRouter = express.Router({ mergeParams: true });
    const { register, login } = require('./auth.controller');
    const { checkFields } = require('../../services/request.checker');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
//

/*
Routes definition
*/
    class AuthRouterClass {
        routes(){
            // HATEOAS
            authRouter.get('/', (req, res) => {
                res.json('HATEOAS for auth');
            });
            
            // Register
            authRouter.post('/register', (req, res) => {
                if( typeof req.body === 'undefined' || req.body === null ) { sendBodyError(res, 'No param provided') }
                // Use controller function
                const { miss, extra, ok } = checkFields(['first_name', 'last_name', 'login', 'email','password'], req.body); 

                if( !ok ){ sendFieldsError( res, 'Bad fields provided', miss, extra ) }

                register(req.body)
                .then( apiResponse => sendApiSuccessResponse(res, 'New user created',apiResponse) )
                .catch( apiResponse => sendApiErrorResponse(res, 'Error uer not create',apiResponse) )
            });

            // Login
            authRouter.post('/login', (req, res) => {
                if( typeof req.body === 'undefined' || req.body === null ) { sendBodyError(res, 'No param provided') }
                // Use controller function
                const { miss, extra, ok } = checkFields(['email','password'], req.body); 
                // Use controller function
                login(req.body)
                .then( apiResponse => sendApiSuccessResponse(res, 'New user created',apiResponse) )
                .catch( apiResponse => sendApiErrorResponse(res, 'Error uer not create',apiResponse) )
            });
        };

        init(){
            this.routes();
            return authRouter;
        }
    }
//

/*
Export
*/
    module.exports = AuthRouterClass;
//