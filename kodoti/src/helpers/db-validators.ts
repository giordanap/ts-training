import User from '../models/user';
import Post from '../models/post';

export const isValidEmail = async(email:string = ''):Promise<void> => {
    const EmailExists = await User.findOne({ email });
    if (EmailExists) {
        throw new Error(`The email ${ email } exist`);
    }
}

export const userExistsById = async(id:string):Promise<void> => {
    const _userExistsById = await User.findById(id);
    if(!_userExistsById) {
        throw new Error(`The User with id ${ id } doesn't exist`)
    }
}

export const isValidUrl = async(url:string = ''):Promise<void> => {
    const UrlExists = await Post.findOne({ url });
    if (UrlExists) {
        throw new Error(`The url ${ url } exist`);
    }
}

export const postExistsById = async(id:string):Promise<void> => {
    const _postExistsById = await Post.findById(id);
    if(!_postExistsById) {
        throw new Error(`The post with id ${ id } doesn't exist`)
    }
}