import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'This is a blog Application 1';
  imgSrc =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s';
  blogs = ['blog-1', 'blog-2', 'blog-3'];

  number = 1;
  onDivClick() {
    console.log('div click');
  }
  onClick(e: any) {
    e.stopPropagation();
    this.number++;
  }
  email: any;
  onSave() {
    console.log(this.email);
  }
}
