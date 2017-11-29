import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  user: any;
  isSignedOut: boolean = true;
  signUpSuccess: boolean;
  signUpFailure: boolean;
  loginSuccess: boolean;
  loginFailure: boolean;

  getUserToken() {
    console.log('This is', this)
    return this.user.token
  }

  login(email: string, password: string) {
    const data = {
      'credentials': {
        'email': email,
        'password': password
    }
  }
  this.http.post(environment.apiServer + '/sign-in', data)
  .subscribe(
    response => {
      console.log('You are now logged in.')
      console.log(response)
      this.user = JSON.parse(response['_body']).user
      console.log('This.user is', this.user)
      this.loginSuccess = true
      this.loginFailure = false
      this.signUpSuccess = false
      this.signUpFailure = false
      this.isSignedOut = false
      this.router.navigate(['/main/'])
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

signOut() {
  let config = {}
  config['headers'] = { Authorization:'Token token=' + this.getUserToken()}
  this.http.delete(environment.apiServer + '/sign-out/' + this.user.id, config)
  .subscribe(
    data => this.user = null,
    err => console.log(err)
  )
}
changePassword(oldPassword: string, newPassword: string) {
  console.log('Store is', store)
  const data = {
    'passwords': {
      'old': oldPassword,
      'new': newPassword
    }
  }
  let config = {}
  config['headers'] = { Authorization:'Token token=' + this.getUserToken()}
  this.http.patch(environment.apiServer + '/change-password/' + this.user.id, data, config)
  .subscribe(
    response => {
      console.log('CPW response is', response)
    },
    err => {
      console.log('Error is', err)
    }
  )
}

constructor(
  private http: Http,
  private router: Router
) { }

}
