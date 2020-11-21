import { Author } from './author';

export interface BasePost {
    id: Number;
    title: String;
    imageUrl: String;
    text: String;
    createdDate: Date;
    likes: Number;
    author: Author;
}
