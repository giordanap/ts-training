import { Request, Response, Router } from 'express';

import User from '../models/user';

import { 
    getUser, 
    getUsers,
    postUser,
    putUser,
    deleteUser
} from '../controllers/user';

class UserRoutes {
    
    router:Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/', getUser);
        this.router.get('/:username', getUser);
        this.router.post('/', postUser);
        this.router.put('/:username', putUser);
        this.router.delete('/:username', deleteUser);
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;