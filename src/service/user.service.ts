import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from 'src/app/base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(public http: HttpClient) {
    super(http);
  }

  getType() {
    const type = localStorage.getItem('type');
    return type;
  }

  getToken() {
    const type = localStorage.getItem('token');
    return type;
  }

  public login(login) {
    return this.http.post('http://localhost:8080/api/login', login, {
      responseType: 'json',
    });
  }

  public getUserInfo() {
    return this.getData('user');
  }
}
