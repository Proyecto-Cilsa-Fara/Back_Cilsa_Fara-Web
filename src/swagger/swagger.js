import swaggerJSDoc from "swagger-jsdoc";


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "API-fara",
            version: '1.0.0',
            description: 'API para administrar la pagina de FARA',
            contact: {
                name: 'CILSA devs'
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Local server'
                }
            ]
        }
    },

    apis: ['./src/swagger/*.yml']
};

const specs = swaggerJSDoc(options);
export default specs;
