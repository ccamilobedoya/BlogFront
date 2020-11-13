import { BasePost } from './base-post';

export class SummaryPost implements BasePost {
    id: Number;
    title: String;
    imageUrl: String;
    text: String;
    createdDate: Date;
    summary: String;
    visibleDate: String;

    constructor(post: BasePost) {
        this.id = post.id;
        this.title = post.title;
        this.summary = post.text.substring(0,5) + "...";
        this.visibleDate = post.createdDate.toString().split('T')[0]; // Cambiar a fecha sin hora
      }
}
