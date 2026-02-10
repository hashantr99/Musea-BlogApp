import { Component, inject } from '@angular/core';

import { BlogService } from '../../blog.service';
import { Blog } from '../../types/blog';
import { RouterLink } from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, BlogCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
blogService=inject(BlogService);
//constructor(private blogService: BlogService) {}

featuredBlogs!:Blog[];

ngOnInit() {
  this.blogService.getFeaturedBlogs().subscribe(result=>{
    this.featuredBlogs = result;
    console.log(this.featuredBlogs);
  })
}
}
