import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  // Not bound to multiple inputs, no object needed
  oldPassword: string;
  newPassword: string;

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  changePassword() {
    this.auth.changePassword(this.oldPassword, this.newPassword)
  }

  signOut() {
    this.auth.signOut()
  }

}
