import { Schema, model, now } from "mongoose";

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

export default model('User', UserSchema);