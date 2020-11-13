import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BasePost } from '../interfaces/base-post';
import { SummaryPost } from '../interfaces/summary-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<BasePost[]> {
    return this.http.get<BasePost[]>("https://blogbackend-iuw3zanaqa-ue.a.run.app/posts");
  }

  getSummaryPosts(): Observable<SummaryPost[]> {
    return this.http.get<SummaryPost[]>("https://blogbackend-iuw3zanaqa-ue.a.run.app/posts")
      .pipe(
        map((posts: SummaryPost[]) => posts.map(post => new SummaryPost(post))));
  }

}
