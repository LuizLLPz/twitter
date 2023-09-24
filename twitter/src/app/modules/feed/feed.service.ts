import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Post} from "./feed.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) {

  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('post');
  }
}
