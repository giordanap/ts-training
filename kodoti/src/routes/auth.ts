import { Router } from 'express';
const { check }  = require('express-validator');
import { login, googleSignIn } from '../controllers/auth';
import { validateFields } from '../middlewares/validate-fields';

class AuthRoutes {
    
    router:Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.post('/login',
            [
                check('email', 'El correo es obligatorio').isEmail(),
                check('password', 'La contraseña es obligatoria').not().isEmpty(),
                validateFields
            ], 
            login
        );
        this.router.post('/google',
            [
                check('id_token', 'id_token es necesario').not().isEmpty(),
                validateFields
            ], 
            googleSignIn
        );
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;