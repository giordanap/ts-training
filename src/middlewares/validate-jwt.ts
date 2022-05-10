import { Request, Response } from 'express'; 
import jwt from 'jsonwebtoken';
import User from '../models/user';

export const validarJWT = async( req: Request, res: Response, next:any ) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        })
    }

    try {
        const uid = jwt.verify(token, <string>process.env.SECRETORPRIVATEKEY);
        const user = await User.findById( uid );

        if ( !user) {
            return res.status(401).json({
                msg: 'No existe el usuario'
            })
        }

        // req.user = user;

        next();

    } catch (error) {
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
}