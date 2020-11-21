import { BasePost } from './base-post';
import { Paginated } from './paginated';

export interface PaginatedBasePost extends Paginated {
    content: BasePost[];
}