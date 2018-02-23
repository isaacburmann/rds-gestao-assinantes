# rds-gestao-assinantes

Um projeto web de gestão de assinaturas para o desafio da RDS

# To run locally

To run this project locally you will need Node.js and Angular CLI installed

To install Node, please follow the instructions from this link: https://nodejs.org/en/download/

After you have installed Node, please run this command as a root user to install Angular CLI globally: npm install -g @angular/cli

If you don't have git installed on your computer, just follow the instructions from this link: https://git-scm.com/downloads

Now you can clone this repository in your computer using the command: git clone https://github.com/isaacburmann/rds-gestao-assinantes.git

- Access the project directory
run the command: cd rds-gestao-assinantes/

- Install the project dependencies
run the command: npm install

- Run the project in the local server
run the command: ng serve

# RESTful API

The endpoints we’ll need are:

- EMPRESAS (COMPANIES)

/api/empresas

Method	Description
GET	    Find all empresas
POST	Create a new empresa

/api/empresas/:id

Method	Description
GET	    Find a single empresa by ID
PUT	    Update entire empresa document
DELETE	Delete a empresa by ID

- PRODUTOS (PRODUCTS)

/api/produtos

Method	Description
GET	    Find all produtos
POST	Create a new produto

/api/produtos/:id

Method	Description
GET	    Find a single produto by ID
PUT	    Update entire produto document
DELETE	Delete a produto by ID


- ASSINATURAS (ASSIGNS)

/api/assinaturas

Method	Description
GET	    Find all assinaturas
POST	Create a new assinatura

/api/empresas/:id

Method	Description
GET	    Find a single assinatura by ID
PUT	    Update entire assinatura document
DELETE	Delete a assinatura by ID