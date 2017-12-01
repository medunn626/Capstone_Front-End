import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  isSignedOut: boolean = true;
  // loginSuccess: boolean;
  loginFailure: boolean;
  // signUpSuccess: boolean;
  signUpFailure: boolean;
  // signOutSuccess: boolean;
  signOutFailure: boolean;
  changePasswordSuccess: boolean;
  changePasswordFailure: boolean;

  login(email: string, password: string) {
    const emailField = <HTMLInputElement>document.getElementById('email-log')
    const passwordField = <HTMLInputElement>document.getElementById('password-log')
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
      this.loginFailure = false
      this.signUpFailure = false
      this.isSignedOut = false
      this.router.navigate(['/main/'])
    },
    err => {
      console.log('Error is', err)
      this.loginFailure = true
      this.signUpFailure = false
      emailField.value = ''
      passwordField.value = ''
    }
  )
}

signUp(email: string, password: string, password_confirmation: string) {
  const newEmailField = document.getElementById('email-sign')
  const newPasswordField = document.getElementById('password-sign')
  const passwordConfirmField = document.getElementById('password-confirm-sign')
  if (password == password_confirmation) {
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
        this.signUpFailure = true
        this.loginFailure = false
        newEmailField.value = ''
        newPasswordField.value = ''
        passwordConfirmField.value = ''
      }
    )
  } else {
    this.signUpFailure = true
    this.loginFailure = false
    newEmailField.value = ''
    newPasswordField.value = ''
    passwordConfirmField.value = ''
  }
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
      this.signOutFailure = false
      this.router.navigate(['/'])
    },
    err => {
      console.log('Error is', err)
      this.signOutFailure = true
    }
  )
}

changePassword(oldPassword: string, newPassword: string) {
  const oldField = document.getElementById('old')
  const newField = document.getElementById('new')
  if (oldPassword != newPassword ) {
    const data = {
      'passwords': {
        'old': oldPassword,
        'new': newPassword
      }
    }
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    this.http.patch(environment.apiServer + '/change-password/' + localStorage.getItem('id'), data, config)
    .subscribe(
      response => {
        console.log('CPW response is', response)
        this.changePasswordSuccess = true
        this.changePasswordFailure = false
        oldField.value = ''
        newField.value = ''
      },
      err => {
        console.log('Error is', err)
        this.changePasswordSuccess = false
        this.changePasswordFailure = true
        oldField.value = ''
        newField.value = ''
      }
    )
  } else {
    this.changePasswordSuccess = false
    this.changePasswordFailure = true
    oldField.value = ''
    newField.value = ''
  }
}

constructor(
  private http: Http,
  private router: Router
) { }

}
