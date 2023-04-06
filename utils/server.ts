import express from 'express'
import http from 'http'
import { createRoutes } from './routes';
import router from '../api';

export class ExpressServer {
    readonly port : number;
    readonly app : express.Express;
    constructor(port: number){
        this.port = port;
        this.app = express()
    }

    async start(){
        this.app.use(express.json())
        await createRoutes(router,this.app)
        const server = http.createServer(this.app)
        server.listen(this.port, ()=> console.info(`Server running at port ${this.port}`))
    }

}