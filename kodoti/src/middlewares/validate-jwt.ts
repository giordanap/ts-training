import { Request, Response, NextFunction } from 'express'; 
import jwt from 'jsonwebtoken';
import User from '../models/user';

interface IPayload {
    _id: string;
    iat: number;
    exp: number;
}

export const validarJWT = async( req: Request, res: Response, next:NextFunction ) => {

    const token = req.header('x-token');
    if ( !token ) return res.status(401).json({ msg: 'No hay token en la peticion' });
    
    try {

        const payload = jwt.verify(token, process.env.SECRETORPRIVATEKEY || 'token_test') as IPayload;
        req.userId = payload._id;

        next();

    } catch (error) {
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
}