/*
Import
*/
const ChatModel = require('../../models/chat.model');
const UserModel = require('../../models/user.model');
const bcrypt = require('bcryptjs');
//

/*
Functions
*/
const newMessage = body => {
    // Search for user
    return new Promise( (resolve, reject) => {

        UserModel.findOne({ email: body.email_user }, (error, user) => {
            if(error){ // Mongo Error
                return reject(error)
            }
            else{ // l'utilisateur existe dans la base

            console.log('ok');
                // Save user
                ChatModel.create(body, (error, newUser) => {
                    if(error){ // Mongo error
                        return reject(error)
                    }
                    else{ // User registrated
                        return resolve(newUser);
                    };
                });
            };
        });
    });
};

const deleteMessage = body => {
    return new Promise( (resolve, reject ) => {

        ChatModel.findOne( { _id: body._id, email_user: body.email }, (error, message) => {
            if(error) reject(error)
            else if( !message ) reject('Message not found')
            else{
                ChatModel.deleteOne(body, (error, message) => {
                    if(error){ // Mongo error
                        return reject(error)
                    }
                    else{ // User registrated
                        return resolve(message);
                    };
                });
                
            }
        })
        
    })
};

const chargeNews = () => {
    // Search for user
    return new Promise( (resolve, reject) => {

        ChatModel.find({}, (error, msg) => {
            if(error){ // Mongo Error
                return reject(error)
            }
            else{
                return resolve(msg);
            };
        });
    });
};


/*
Export
*/
module.exports = {
    newMessage,
    deleteMessage,
    chargeNews
}
//