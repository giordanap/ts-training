import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import indexRoutes from './routes/indexRoutes';
import postsRouter from './routes/postsRoutes';
import dbConnection from './database/config';

class Server {

    app:express.Application;
    port?:string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.config();
        this.routes();
    }

    connectDB() {
        dbConnection();
    }

    config(){
        // Conectar a la base de datos
        this.connectDB();
        //Middlewares
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    }

    routes(){
        this.app.use(indexRoutes);
        this.app.use('/api/posts', postsRouter);
    }

    start(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${ this.port }`);
        })
    }
}

const server = new Server();
server.start();

