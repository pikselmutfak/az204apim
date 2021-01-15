module.exports = {
    swagger: '2.0',
    info: {
        version: '1.0.0',
        title: 'Pixel API Management Web Services',
        description: '',
        contact: {
            name: 'Kazım Etiksan',
            email: 'kazim@pikselmutfak.com',
            url: 'https://www.pikselmutfak.com/'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    host: "pixelapimservices.azurewebsites.net",
    schemes: [
        "http",
        "https"
    ],
    paths: {
        "/users": {
            "get": {
                tags: ['Users'],
                description: "Returns all users",
                operationId: 'getUsers',
                responses: {
                    "200": {          
                        description: "A list of users.",
                    }
                }
            }
        },
        "/contact": {
            "get": {
                tags: ['Contact'],
                description: "Returns contact information",
                operationId: 'getContact',
                responses: {
                    "200": {          
                        description: "Contact information.",
                    }
                }
            }
        }
    }
}