import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // OpenAPI version
    info: {
      title: 'Comics Api', // API Title
      version: '1.0.0', // API Version
      description: 'API Documentation for MangoJuice Assingment', // API Description
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1', // Your server URL
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Path to your API files (or JS if not using TypeScript)
};

// Initialize swagger-jsdoc
const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
