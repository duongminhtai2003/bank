import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private user: UserService, private router: Router) {}

  login: User = {
    phone: '',
    password: '',
  };

  ngOnInit(): void {}

  loginAPI() {
    this.user.login(this.login).subscribe(
      (res) => {
        console.log(res);
        // tslint:disable-next-line:no-string-literal
        const data = res['data'];
        // tslint:disable-next-line: no-string-literal
        const meta = res['meta'];
        // tslint:disable-next-line: no-string-literal
        localStorage.setItem('token', data['token']);
        localStorage.setItem('type', data['type']);
        alert(meta.message);
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

export class User {
  phone: string;
  password: string;
}
