import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  user: any
  email: string
  password: string
  passwordConfirmation: string

  getUserToken() {
    return this.user.token
  }

  signUp(email, password, passwordConfirmation) {
    const data = {
      'data': {
        'email': this.email,
        'password': this.password,
        'passwordConfirmation': this.passwordConfirmation
      }
    }
    this.http.post(environment.apiServer + '/sign-up', data)
    .subscribe(
      response =>
      console.log('Response is', response)
    ),
    err => console.error()
  }

  login(email, password) {
    const  data = {
      'data': {
        'email': this.email,
        'password': this.password
    }
  }
  this.http.post(environment.apiServer + '/login', data)
      .subscribe(
        response => {
          console.log('Response is', response)
        },
        err => console.error()
      )
  }

  constructor(
    private http: Http,
    private router: Router
  ) { }

}
