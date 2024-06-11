## Nest JS Boilerplate for REST API
> [!NOTE]  
> This repository is still under development.

> [!TIP]
> We shall maintain this repository to enrich maximum number of feature Nest JS provides. 

At the core of each backend project, Authentication and Authorization mechanism is required for production grade projects. 

In this repo we have auth and user module which are the nessessary modules for the implementation of Authentication and Authorization.

### Authentication 
Authentication answers the question, "Who are you?". It is the process of verifying the identity of a user, typically by checking their credentials, such as username and password.

We shall use Passport.js for Authentication with its various flavours such as 

    - [] Local authentication (username and password), 
    - [] JWT for token-based authentication 
    - [] Secure JWT secrets
    - [] Social authentication

This repo contains above mentioned authentication flavors using Passport.js however, you could use any one of the flavor based on your project needs. Essentially, cloning this repo, you could select your authentication flavor and carry on with your project without removing other authentication flavors since there is no harm in it. 

### Authorization
Post Authentication, we need an answer to the question, "What are you allowed to do?". Hence Authorization comes after authentication and is the process of determining what a user is allowed to do within an application.

We have bellow code implementation for authorization such as;

    - [] Nest JS Guards
    - [] Roles and Permissions
    - [] Role-Based Guards
    - [] Resource based authorization

And finally, we are handling Unauthorized access gracefully. 


> [!NOTE] 
> Feel free to suggest any core implementation that is missing in this repo. 
