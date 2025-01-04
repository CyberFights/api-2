const { API } = require("easy-api.ts"); // Use: import { API } from 'easy-api.ts'; for TypeScript.
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const api = new API({
    port: process.env.PORT || 4000,
    host: "0.0.0.0",
    backlog: 255,
    spaces: 1,
    reverseReading: false,
    database: {
        enabled: true, // VERY IMPORTANT TO ENABLE IT!!
        type: 'replit', // You can use: 'replit' | 'mongo' | 'quickdb' | 'default'
        // mongoUrl: '...'
    }
})

app.get('/',(req,res) =>res.send('api connected') )
// Lets load the handler...
api.routes.load('./routes').then(() => {
    api.connect() // We're starting the API when the source is ready.
})
