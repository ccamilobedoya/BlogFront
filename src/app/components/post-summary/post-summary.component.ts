import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SummaryPost } from 'src/app/interfaces/summary-post';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss']
})
export class PostSummaryComponent implements OnInit {

  summaryPostsObs: Observable<SummaryPost[]>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.summaryPostsObs = this.postService.getSummaryPosts();
  }

}
