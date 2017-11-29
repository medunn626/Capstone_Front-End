import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  isSignedOut: boolean = true;
  loginSuccess: boolean;
  loginFailure: boolean;
  signUpSuccess: boolean;
  signUpFailure: boolean;
  signOutSuccess: boolean;
  signOutFailure: boolean;
  changePasswordSuccess: boolean;
  changePasswordFailure: boolean;

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
      const user = JSON.parse(response['_body']).user
      console.log('User is', user)
      localStorage.setItem('token', user.token)
      localStorage.setItem('id', user.id)
      console.log('Local storage token is', localStorage.getItem('token'))
      console.log('Local storage ID is', localStorage.getItem('id'))
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
  config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
  this.http.delete(environment.apiServer + '/sign-out/' + localStorage.getItem('id'), config)
  .subscribe(
    data => {
      localStorage.clear()
      console.log('Local storage token is', localStorage.getItem('token'))
      console.log('Local storage ID is', localStorage.getItem('id'))
      this.signOutSuccess = true
      this.signOutFailure = false
      this.router.navigate(['/'])
    }
    err => {
      console.log('Error is', err)
      this.signOutSuccess = false
      this.signOutFailure = true
  )
}
changePassword(oldPassword: string, newPassword: string) {
  const data = {
    'passwords': {
      'old': oldPassword,
      'new': newPassword
    }
  }
  let config = {}
  config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
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
