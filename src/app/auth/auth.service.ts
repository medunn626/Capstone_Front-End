import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  user: any;
  // email: string;
  // password: string;
  // password_confirmation: string;
  oldPassword: string;
  newPassword: string;

  signUp(email: string, password: string, password_confirmation: string) {
    const data = {
      'credentials': {
        'email': email,
        'password': password,
        'password_confirmation': password_confirmation
      }
    }
    this.http.post(environment.apiServer + '/sign-up', data)
    .subscribe(
      response => {
        this.login(data.credentials.email, data.credentials.password)
        console.log('Success')
      },
      err => console.log('Error is', err)
    )
  }

  login(email: string, password: string) {
    const data = {
      'credentials': {
        'email': email,
        'password': password
    }
  }
  return this.http.post(environment.apiServer + '/sign-in', data)
      .subscribe(
        response => {
          this.router.navigate(["/login/"])
          console.log('You are now logged in.')
        },
        err => console.log('Error is', err)
      )
    }

    getUserToken() {
      return this.user.token
    }

  changePassword(oldPassword, newPassword) {
  const data = {
    'data': {
      'oldPassword': this.oldPassword,
      'newPassword': this.newPassword
    }
  }
  this.http.patch(environment.apiServer + '/change-password/' + this.user.id, data)
    .subscribe(
      response => {
        console.log('Response is', response)
      },
      err => console.error()
    )
  }

  signOut() {
  this.http.delete(environment.apiServer + '/sign-out/' + this.user.id)
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
