# Evaluation NodeJS / MongoDB

Une fois le dossier du 9 novembre téléchargé, vous devez modifier le code pour y intégrer :

- Un service pour gérer les requêtes utilisateur (cf. dossier du 19 octobre)
- Un service pour gérer les réponses du serveur (cf. dossier du 19 octobre)
- Un model pour crèer un chat  (cf. dossier du 9 novembre)
- Une route et sont controleur pour le chat :
    - Créer un message chat
    - Supprimer un message (utilisateur)
    - charger les nouveaux messages

Vous vous sentez la nécessité de le faire, vous pouvez créer des routes fronts pour afficher les résultat dans une vue HTML (ou EJS)

__Votre travail est à livrer sur un répetoire GitHub ou GitLab.__


Routes API

User
- Register : Inscription d'un utilisateur dans la base de donnée
    - URL : http://localhost:8565/api/auth/register
    - body params : 
        - first_name (String)
        - last_name (String)
        - login (String)
        - email (String)
        - password (String)            
- Login : Connexion d'un utilisateur dans la base de donnée
    - URL : http://localhost:8565/api/auth/login
    - body params :
        - email (String)
        - password (String)
            
Chat 
- newMessage : Création d'un nouveau message dans la base de donnée
    - URL : http://localhost:8565/api/chat/newMessage
    - body params :
        - nom (String) // Nom du Chat
        - email_user (String) 
        - content (String) // Contenu du message 
- deleteMessage : Suppression d'un message utilisateur dans la base de donnée
    - URL : http://localhost:8565/api/chat/deleteMessage
    - body params :
        - _id (String) // _id du message
        - email_user (String)
- chargeNews : 
    - URL : http://localhost:8565/api/chat/chargeNews
