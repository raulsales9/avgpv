import Posts, { PostAttributes } from './../entities/Posts';

export class PostRepository {
  static async createPost(postData: PostAttributes): Promise<Posts> {
    const newPost = await Posts.create(postData);
    return newPost;
  }
  static async getAllPost(): Promise<Posts[]>{
    const posts  = await Posts.findAll();
    return posts;
  }
  static async deletePosts(userId: number): Promise<void>{
    await Posts.destroy({
      where: {
        id_user: userId
      }
    });
  }
  static async deleteSinglePost(idPost: number): Promise<void>{
    await Posts.destroy({
      where: {
        id_user: idPost
      }
    });
  }
}