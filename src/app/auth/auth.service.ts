import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  user: any;
  signUpSuccess: boolean;
  signUpFailure: boolean;
  loginSuccess: boolean;
  loginFailure: boolean;
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
        this.router.navigate(['/main'])
        console.log('Success')
      },
      err => {
        console.log('Error is', err)
        this.signUpSuccess = false
        this.signUpFailure = true
        this.loginSuccess = false
        this.loginFailure = false
      }
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
          this.router.navigate(['/main/'])
          console.log('You are now logged in.')
          this.loginSuccess = true
          this.loginFailure = false
          this.signUpSuccess = false
          this.signUpFailure = false
        },
        err => {
          console.log('Error is', err)
          this.loginSuccess = false
          this.loginFailure = true
          this.signUpSuccess = false
          this.signUpFailure = false
        }
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
