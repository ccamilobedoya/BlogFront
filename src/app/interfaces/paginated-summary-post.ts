import { BasePost } from './base-post';
import { Paginated } from './paginated';
import { SummaryPost } from './summary-post';

export interface PaginatedSummaryPost extends Paginated {
    content: SummaryPost[];
}