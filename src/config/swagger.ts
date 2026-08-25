// Endpoint geral 

// nome do type que vai ser exportada
import { application } from "express";
import swaggerJSDoc from "swagger-jsdoc";
/* Obrigatorio: title e version. Ex:

    definition: {
        openapi: "3.0.0",
        info:{
            title: "All-clinic",
            version: "1.0.0",
        }
    }
*/

const option: swaggerJSDoc.Options = {
    definition: 
    {
        openapi: "3.0.0",
        info:{
            title: "All-clinic",
            version: "1.0.0",
            description: "Documentação da api das rotas do projeto"
        },

        servers:[
            {
                url: "http://localhost:3000",
                description: "Local"
            } //Mais servidores a partir daqui. Ex: produção e homologação
        ],

        paths:{
        //Todos os endpoints entram aqui, com seus respectivos métodos
            "/api/v1/pacientes": {
                get:{
                    summary: "Resgatar dados do paciente",
                    description: "Endpoint para buscar os dados dos pacientes registrados no banco",
                    tags:["Paciente"],
                    responses:{
                        200: {
                            description: "Estatisticas recuperadas com sucesso",
                            content: {
                                "aplication/json":{
                                    schema:{
                                        type: "object",
                                        properties:{
                                            nome:{type:"string", example:"Rogerio"},
                                            cpf:{type:"string", example:"11100011122"},
                                            telefone:{type:"string", example:"1122223333"}
                                        }
                                    }
                                }
                            }
                        },
                        400:{
                            description: "Bad Request - Informações faltantes ou com formatação diferente do esperado",
                            content: {
                                "aplication/json":{
                                    schema:{
                                        type: "object",
                                        properties:{
                                            message:{type:"string", example:"Patient validation failed: 'cpf' is required"}
                                        }
                                    }
                                }
                            }
                        },
                    },
                },
                post:{
                    summary: "Subir dados do paciente",
                    description: "Insere dados no banco de dados recebendo um body em json",
                    tags:["Paciente"],
                    responses:{
                        201:{
                            description:"Created - Paciente criado com sucesso",
                            content:{
                                "aplication/json":{
                                    schema:{
                                        type:"object",
                                        properties:{
                                            name:{type:"string", example:"Miguel"},
                                            cpf:{type:"string", example:"444.444.555-66"},
                                            dateOfBirth:{type:"date", example:"2007-09-12T00:00:00.000Z"},
                                            email: {type:"string" ,example:"miguel@gmail.com"},
                                            phone: {type:"string", example:"11912345678"},
                                            status: {type:"string" ,example:"A"},
                                            sex: {type:"string", example:"M"},
                                            address: {type:"IAddress", example:{
                                                cep: {type:"string", example:"12900-005"},
                                                street: {type:"string", example:"Rua açucenas"},
                                                number: {type:"string", example:"200"},
                                                city: {type:"string", example:"Bom Jesus dos Perdões"},
                                                state: {type:"string", example:"São Paulo"}
                                            }},
                                            _id: {type:"string", example:"6a84d9364fd98d907cbd1743"},
                                            createdAt: {type:"date", example:"2026-08-18T22:14:14.726Z"},
                                            updatedAt: {type:"date", example:"2026-08-18T22:14:14.726Z"},
                                            __v:{type:"int", example:"0"} //Direto do mongoDB
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put:{
                    summary:"Atualizar os dados do paciente",
                    description:"Atualiza as informações de um paciente específico com o id dele",
                    tags:["Paciente"],
                    responses:{
                        400:{
                            description:"Bad request - Informações faltantes ou com formatação diferente do esperado",
                            content:{
                                "aplication/json":{
                                    schema:{
                                        type:"object",
                                        properties:{
                                            message:{type:"string", example:"Patient validation failed: 'cpf' is required"}
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                delete:{
                    summary:"Apagar paciente",
                    description:"Busca um paciente no banco de dados e apaga todas as suas informações",
                    tags:["Paciente"],
                    responses:{
                        400:{
                            description:"Bad request - Informações faltantes ou com formatação diferente do esperado",
                            content:{
                                "aplication/json":{
                                    schema:{
                                        type:"object",
                                        properties:{
                                            message:{type:"string", example:"Patient validation failed: 'cpf' is required"}
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        },
    },
    apis:[], //pesquisar melhor
};

export const swaggerSpec = swaggerJSDoc(option);