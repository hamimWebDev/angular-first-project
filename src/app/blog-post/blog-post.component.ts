import { Component } from '@angular/core';
import { BlogService } from './blog.service';


@Component({
  selector: 'app-blog-post',
  standalone: false,

  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css',
})
export class BlogPostComponent {
  blogs;

  constructor(service: BlogService) {
    this.blogs = service.getBlogService();
  }
}
