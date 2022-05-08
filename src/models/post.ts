import { Schema, model, now } from "mongoose";

const  PostSchema = new Schema({
    title: { type: String, required:true},
    url: { type: String, required: true, unique: true, lowercase: true },
    content: { type: String, required: true },
    image: String,
    createdAt: { type: Date, default: Date.now },
    updateAt: Date
});

PostSchema.methods.toJSON = function() {
    const { __v, _id,...post } = this.toObject();
    post.uid = _id;
    return post;
}

export default model('Post', PostSchema);