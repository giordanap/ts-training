import { Request, Response, Router } from 'express';

import { 
    getPost, 
    getPosts,
    postPost,
    putPost,
    deletePost
} from '../controllers/post';

class PostRoutes {
    
    router:Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/', getPosts);
        this.router.get('/:url', getPost);
        this.router.post('/', postPost);
        this.router.put('/:url', putPost);
        this.router.delete('/:url', deletePost);
    }

}

const postRoutes = new PostRoutes();
export default postRoutes.router;