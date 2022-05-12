import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';

import User from '../models/user';

export const getUsers = async(req: Request, res: Response):Promise<void> => {
  const { from = 0 , limit = 5 } = req.query;
  const query = { state: true };

  const [totalRows, users] = await Promise.all([
    User.countDocuments(),
    User.find(query).skip(<number>from).limit(<number>limit)
  ]);

  res.json({
    totalRows,
    users
  });
}

export const getUser = async(req: Request, res: Response) => {
    const user = await User.findOne({_id: req.userId});
    if ( !user) return res.status(401).json({ msg: 'No existe el usuario' });
    res.json(user);
}

export const postUser = async(req: Request, res: Response):Promise<void> => {
    const { name, email, password, username } = req.body;
    const newUser = new User({ name, email, password, username });

    // Encriptar la contraseña
    const passwordEncriptada = bcryptjs.genSaltSync();
    newUser.password = bcryptjs.hashSync( password, passwordEncriptada );

    await newUser.save();
    res.json({ data: newUser });
}

export const putUser = async(req: Request, res: Response):Promise<void> => {
  const { id } = req.params;
    const { _id, password, ...payload } = req.body;

    if ( password ) {
      const passwordEncriptada = bcryptjs.genSaltSync();
      payload.password = bcryptjs.hashSync( password, passwordEncriptada );
  }

  const user = await User.findOneAndUpdate({id}, req.body, {new: true});
  res.json(user);
}

export const deleteUser = async(req: Request, res: Response):Promise<void> => {
    const { username } = req.params;
    await User.findOneAndDelete({username});
    res.json({response: 'User deleted successfully'});
}