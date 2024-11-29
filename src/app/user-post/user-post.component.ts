import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-post',
  standalone: false,

  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.css',
})
export class UserPostComponent {
  users;
  constructor(service: UserService) {
    this.users = service.getUserService();
  }
}
