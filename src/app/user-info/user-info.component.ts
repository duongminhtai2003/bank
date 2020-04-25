import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {

  constructor(
    private userService: UserService
    ) {}

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err);
    })
  }


}
