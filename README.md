# rds-gestao-assinantes

A web app project, developed for the RDS Full Stack Developer Challenge


# Frameworks and tecnologies used in this project

- Angular: https://angular.io/

- Bootstrap 4.0: https://getbootstrap.com/

- ngx-bootstrap: https://valor-software.com/ngx-bootstrap/#/

- Mean Stack: http://mean.io/


# What do you need to run this project locally

To run this project locally you will need Node.js and Angular CLI installed in your computer

- To install Node.js, please follow the instructions from this link: https://nodejs.org/en/download/

- After you have Node.js installed, please run this command as a root user to install Angular CLI globally: npm install -g @angular/cli

- If you don't have git installed on your computer, just follow the instructions from this link: https://git-scm.com/downloads

- Now you can clone this repository in your computer using the command: git clone https://github.com/isaacburmann/rds-gestao-assinantes.git

- If you want to use a local Database, please install MongoDB (https://docs.mongodb.com/manual/installation/) and provide your MONGO_URI on line 22 of the server.js file


# Running the project locally

- Access the project directory
run the command: cd rds-gestao-assinantes/

- Install the project dependencies
run the command: npm install

- Run the node server
run the command: node server.js

- Run the angular project
run the command: ng serve


# RESTful API paths

The rest api endpoints of this project are:

# EMPRESAS (COMPANIES)
- GET /api/empresas - Find all empresas
- GET /api/empresas/:id - Find a single empresa by ID
- GET /api/empresas/assinantes - Find all empresas classified as assinantes
- GET /api/empresas/pagantes - Find all empresas classified as pagadoras
- POST /api/empresas - Create a new empresa
- PUT /api/empresas/:id - Update entire empresa document
- DELETE /api/empresas/:id- Delete a empresa by ID


# PRODUTOS (PRODUCTS)
- GET /api/produtos - Find all produtos
- GET /api/produtos/:id - Find a single produto by ID
- POST /api/produtos - Create a new produto
- PUT /api/produtos/:id - Update entire produto document
- DELETE /api/produtos/:id - Delete a produto by ID


# ASSINATURAS (ASSIGNS)
- GET /api/assinaturas - Find all assinaturas
- GET /api/empresas/:id - Find a single assinatura by ID
- POST /api/assinaturas - Create a new assinatura
- PUT /api/empresas/:id - Update entire assinatura document
- DELETE /api/empresas/:id - Delete a assinatura by ID

# Example of creating a ASSINATURA using the rest api

- Make a POST request to the api address with the params bellow in the body:
                    {
                        moeda: '',
                        valor: '',
                        data: '',
                        produto: {
                            nome: '',
                            valor: {
                                brl: '',
                                usd: '',
                                eur: '',
                            }
                        },
                        empresa_gerencia: {
                            _id: '',
                            nome: ''
                        },
                        empresa_paga:  {
                            _id: '',
                            nome: ''
                        }
                    }

Obs about api address:
- Web API address: https://nameless-reaches-10849.herokuapp.com/api/assinaturas
- Local API address: https://localhost:8080/api/assinaturas