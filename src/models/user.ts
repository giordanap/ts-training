import { Schema, model, Document } from "mongoose";
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    name:string,
    email:string,
    password:string,
    username:string
    encryptPassword(password: string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
}

const  UserSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es obligatorio'] },
    email: { type: String, required: [true, 'El correo es obligatorio'], unique: true },
    password: { type: String, required: [true, 'la constraseña es obligatorio'] },
    username: { type: String, required: [true, 'El nombre de usuario es obligatorio'] },
    imagen: String,
    createdAt: { type:Date, default: Date.now() }
});

UserSchema.methods.toJSON = function() {
    const { __v, password, _id, ...usuario  } = this.toObject();
    usuario.uid = _id;
    return usuario;
}

UserSchema.methods.encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

UserSchema.methods.validatePassword = async function(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
}

export default model<IUser>('User', UserSchema);