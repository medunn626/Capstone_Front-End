import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  user: any
  email: string
  password: string

  getUserToken() {
    return this.user.token
  }

  login(email, password) {
    const  data = {
      'data': {
        'email': email,
        'password': password
    }
  }

  this.http.post(environment.apiServer + '/login', data)
      .subscribe(
        response => {
          console.log(this.user)
        },
        err => console.error()
      )
  }

  constructor(
    private http: Http,
    private router: Router
  ) { }

}
