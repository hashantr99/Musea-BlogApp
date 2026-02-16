import { Component, inject } from '@angular/core';
import { BlogService } from '../../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../types/blog';
import { CategoryService } from '../../category.service';
import { Category } from '../../types/category';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
blogService=inject(BlogService);
categoryService=inject(CategoryService);
route=inject(ActivatedRoute);
blog!:Blog;
categoryList:Category[]=[];
ngOnInit() {
  let id = this.route.snapshot.params['id'];
  console.log(id);
  this.blogService.getBlogById(id).subscribe(result=>{
    this.blog = result;
  });
  this.categoryService.getCategoryList().subscribe(result=>{
    this.categoryList = result;
  })
}

getCategoryName() {
  return this.categoryList.find(x=>x.id == this.blog?.categoryId)?.name
}
}
