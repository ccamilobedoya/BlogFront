import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { BasePost } from '../interfaces/base-post';
import { SummaryPost } from '../interfaces/summary-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<BasePost[]> {
    return this.http.get<BasePost[]>(environment.apiurl + "/posts");
  }

  getSummaryPosts(): Observable<SummaryPost[]> {
    return this.http.get<SummaryPost[]>(environment.apiurl + "/posts")
      .pipe(
        map((posts: SummaryPost[]) => posts.map(post => new SummaryPost(post))));
  }

}
