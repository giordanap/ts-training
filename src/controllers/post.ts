import { Request, Response } from 'express';
import Post from '../models/post';

export const getPosts = async(req: Request, res: Response):Promise<void> => {
  const { from = 0 , limit = 2 } = req.query;
  const query = { state: true };

  const [totalRows, posts] = await Promise.all([
    Post.countDocuments(),
    Post.find(query).skip(<number>from).limit(<number>limit)
  ]);

  res.json({
    totalRows,
    posts
  });
}

export const getPost = async(req: Request, res: Response):Promise<void> => {
    const post = await Post.findOne({url: req.params.url})
    res.json(post);
}

export const postPost = async(req: Request, res: Response):Promise<void> => {
    const { title, url, content, image } = req.body;
    const newPost = new Post({ title, url, content, image });
    await newPost.save();
    res.json({ data: newPost });
}

export const putPost = async(req: Request, res: Response):Promise<void> => {
    const { url } = req.params;
    const post = await Post.findOneAndUpdate({ url }, req.body, {new: true});
    res.json(post);
}

export const deletePost = async(req: Request, res: Response):Promise<void> => {
    const { url } = req.params;
    await Post.findOneAndDelete({url});
    res.json({response: 'Post deleted successfully'});
}