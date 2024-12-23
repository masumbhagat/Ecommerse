#To install open terminal go to the folder then

npm install
###open .env file and put your value for the env variable.

#To run type on terminal and press enter

npm run start:dev


Creating a new project with the Nest CLI is recommended for first-time users. We'll continue with this approach in First Steps.



$ npm i -g @nestjs/cli
$ nest new project-name

We're in love with TypeScript, but above all - we love Node.js. That's why Nest is compatible with both TypeScript and pure JavaScript


Controllers are responsible for handling incoming requests and returning responses to the client.

For quickly creating a CRUD controller with the validation built-in, you may use the CLI's CRUD generator: nest g resource [name].

A module is a class annotated with a @Module() decorator. The @Module() decorator provides metadata that Nest makes use of to organize the application structure.

A guard is a class annotated with the @Injectable() decorator, which implements the CanActivate interface.

An interceptor is a class annotated with the @Injectable() decorator and implements the NestInterceptor interface.

Validation
It is best practice to validate the correctness of any data sent into a web application. To automatically validate incoming requests, Nest provides several pipes available right out-of-the-box:

ValidationPipe
ParseIntPipe
ParseBoolPipe
ParseArrayPipe
ParseUUIDPipe
The ValidationPipe makes use of the powerful class-validator package and its declarative validation decorators.
commands for validation and class transformer

npm i --save class-validator class-transformer


Install the npm package:

npm install typeorm --save

You need to install reflect-metadata shim:

npm install reflect-metadata --save

and import it somewhere in the global place of your app (for example in app.ts):

import "reflect-metadata"

You may need to install node typings:

npm install @types/node --save-dev

npm install mysql --save

for PostgreSQL or CockroachDB

npm install pg --save

