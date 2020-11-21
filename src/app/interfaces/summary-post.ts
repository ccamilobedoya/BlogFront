import { Author } from './author';
import { BasePost } from './base-post';

export class SummaryPost implements BasePost {
    id: Number;
    title: String;
    imageUrl: String;
    text: String;
    createdDate: Date;
    likes: Number;
    author: Author;
    summary: String;
    visibleDate: String;

    constructor(post: BasePost) {
        this.id = post.id;
        this.title = post.title;
        this.imageUrl = post.imageUrl;
        this.summary = post.text.substring(0,5) + "...";
        this.visibleDate = post.createdDate.toString().split('T')[0]; // Cambiar a fecha sin hora
      }
}
