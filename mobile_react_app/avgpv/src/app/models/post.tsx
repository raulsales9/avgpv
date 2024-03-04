import { Entity } from './entity';

export class Post extends Entity {
  title: string;
  body: string;
  created_at: Date;
  likes: number;
  is_submitted: boolean;
  image: any; 

  constructor(
    id: number,
    id_user: number,
    date: Date,
    title: string,
    body: string,
    created_at: Date,
    likes: number,
    is_submitted: boolean,
    image: any 
  ) {
    super(id, id_user, date);
    this.title = title;
    this.body = body;
    this.created_at = created_at;
    this.likes = likes;
    this.is_submitted = is_submitted;
    this.image = image;
  }
}
