import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { BasePost } from '../interfaces/base-post';
import { SummaryPost } from '../interfaces/summary-post';
import { PaginatedBasePost } from '../interfaces/paginated-base-post';
import { PaginatedSummaryPost } from '../interfaces/paginated-summary-post';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': "Basic " + btoa(environment.user + ":" + environment.userpass)
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<BasePost[]> {
    return this.http.get<BasePost[]>(environment.apiurl + "/posts/all", httpOptions);
  }

  getSummaryPosts(): Observable<SummaryPost[]> {
    return this.http.get<SummaryPost[]>(environment.apiurl + "/posts/all", httpOptions)
      .pipe(
        map((posts: SummaryPost[]) => posts.map(post => new SummaryPost(post))));
  }

  getPaginatedPosts(): Observable<PaginatedBasePost> {
    return this.http.get<PaginatedBasePost>(environment.apiurl + "/posts", httpOptions);
  }

  getPaginatedSummaryPosts(): Observable<PaginatedSummaryPost> {
    return this.http.get<PaginatedSummaryPost>(environment.apiurl + "/posts", httpOptions)
      .pipe(
        map((data: PaginatedSummaryPost) => {
          data.content = data.content.map(post => new SummaryPost(post));
          return data;
        })
      );
  }
  

}
