import { Pool, Client } from "pg";
var fs = require("fs");
const connectionString = 'postgresql://info:show-password@app-3216da81-c71f-49cb-a924-b5a9c3582f4e-do-user-10360375-0.b.db.ondigitalocean.com:25060/info?sslmode=require';
const config = {
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync('./ca-certificate.crt').toString(),
    },
};


window.Pool = Pool;
window.Client = Client;