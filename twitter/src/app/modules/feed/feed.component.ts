import { Component } from '@angular/core';
import {FeedService} from "./feed.service";
import { Post } from "./feed.model";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  posts: Post[] = [];
  constructor(private feedService: FeedService) {
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.feedService.getAllPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
}
