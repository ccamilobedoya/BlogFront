import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasePost } from 'src/app/interfaces/base-post';
import { PaginatedBasePost } from 'src/app/interfaces/paginated-base-post';
import { PaginatedSummaryPost } from 'src/app/interfaces/paginated-summary-post';
import { SummaryPost } from 'src/app/interfaces/summary-post';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss']
})
export class PostSummaryComponent implements OnInit {

  paginatedPostsObs: Observable<PaginatedBasePost>;
  paginatedSummaryPostsObs: Observable<PaginatedSummaryPost>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.paginatedPostsObs = this.postService.getPaginatedPosts();
    this.paginatedSummaryPostsObs = this.postService.getPaginatedSummaryPosts();
  }

}
