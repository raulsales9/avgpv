import Users from './../../entities/Users';
import Posts from './../../entities/Posts';
import { Request, Response } from 'express';

export async function getPostAndUser(req: Request, res: Response) {
    const postId = req.params.id;
    const post = await Posts.findOne({ where: { id: postId } });
    if (!post) {
      return res.status(404).send('Post no encontrado');
    }
    const user = await Users.findOne({ where: { id: post.id_user } });
    res.render('posts/post', { post, user });
  }
  