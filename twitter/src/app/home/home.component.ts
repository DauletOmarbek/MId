import { Component } from '@angular/core';
import { Post } from '../models/posts';
import { PostService } from '../service/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts: Post[] = [];
  like: number = 0;

  constructor(private postService: PostService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
      this.posts = this.postService.getAll();
   
  }


  // addlike(): void {

  // }

}
