import { Request, Response } from 'express';
import Posts, { PostAttributes } from './../../entities/Posts';
import { PostRepository } from './../../repository/postRepository';


export const createPostApi = async (req: Request, res: Response)=>{
    try {
        const postData: PostAttributes = req.body;

        if (!postData.title || !postData.body || !postData.id_user) {
            return res.status(400).json({ message: 'Title, body and user ID are required' });
        }

        const newPost = await PostRepository.createPost(postData);

        res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message || 'Internal server error' });
    }
}