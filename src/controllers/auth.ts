import { Request, Response } from "express";
import User from '../models/user';
import bcryptjs from 'bcryptjs'
import { generarJWT } from '../helpers/generar-jwt';
import { googleVerify } from '../helpers/google-verify';

export const login = async( req: Request, res: Response) => {

    const { email, password } = req.body;
    
    try {
        
        const user = await User.findOne({ email });
        
        // verficar si el email existe tresCruces@gmail.com
        if ( !user ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            })
        }
        
        // verificar password
        const validPassword = bcryptjs.compareSync(password, user.password);
        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - contraseña'
            })
        }
        
        // generar JWT
        const token:string = await generarJWT(user.id);
        console.log('llego');

        res.json({
            user,
            token
        });
        

    } catch (error) {
        // console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const googleSignIn = async( req:Request, res: Response ) => {

    const { id_token } = req.body;

    try {

        const { email, name, imagen } = await googleVerify( id_token );

        let user = await User.findOne({ email });

        if ( !user ) {
            // Tengo que crearlo
            const data = {
                name,
                email,
                imagen
            }

            user = new User( data );
            await user.save();
        }

        // Generar el JWT
        const token = await generarJWT( user.id );

        res.json({
            user,
            token
        })

    } catch (error) {
        res.status(400).json({
            msg: 'Token de Google no es válido'
        })
    }
}
