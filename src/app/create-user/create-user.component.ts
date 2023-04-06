import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  getUserInfo: User = new User();
  constructor(private userService: UserService, private router: Router) { }
  repassword: string = '';
  formatted = false;
  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.getUserInfo);
    if (this.repassword != this.getUserInfo.password) {
      this.formatted = true;
      return;
    }
    this.saveUser();
  }

  goToUserList() {
    this.router.navigate(['/users'])
  }

  saveUser() {
    this.userService.createUser(this.getUserInfo).subscribe(data => {
      this.goToUserList()
    }, error => console.log(error));
  }
}
