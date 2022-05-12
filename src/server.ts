import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import indexRoutes from './routes';
import authRouter from './routes/auth';
import postsRouter from './routes/post';
import usersRouter from './routes/user';

import dbConnection from './database/config';

class Server {

    public app:express.Application;
    port:string;

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
        this.app.use(express.json()); // Con esto la consola ya entiende archvos tipo json
        this.app.use(express.static('public')); // para autenticacion google
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    }

    routes(){
        this.app.use(indexRoutes);
        this.app.use('/api/auth', authRouter);
        this.app.use('/api/user', usersRouter);
        this.app.use('/api/post', postsRouter);
    }

    start(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${ this.port }`);
        })
    }
}

const server = new Server();
server.start();

