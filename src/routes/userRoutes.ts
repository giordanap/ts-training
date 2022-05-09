import { Router } from 'express';
import { check } from 'express-validator';

import { 
    getUser, 
    getUsers,
    postUser,
    putUser,
    deleteUser
} from '../controllers/user';
import { validateFields } from '../middlewares/validate-fields';
import { 
    userExistsById,
	isValidEmail,
} from '../helpers/db-validators';

class UserRoutes {
    
    router:Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/', getUsers);
        this.router.get('/:username', getUser);
        this.router.post('/',
            [
                check('name', 'Name is required').not().isEmpty(),
                check('Email').custom(isValidEmail),
                check('username', 'Username must be a string with 4 characters as minimun').isLength({min: 4}),
                validateFields
            ], 
            postUser
        );
        this.router.put('/:username', 
            [
                check('id', 'No es un id válido').isMongoId(), 
                check('id').custom(userExistsById),
                validateFields,
            ], 
            putUser
        );
        this.router.delete('/:username', 
            [
                check('id', 'No es un id válido').isMongoId(), 
                check('id').custom(userExistsById),
                validateFields,
            ], 
            deleteUser
        );
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;