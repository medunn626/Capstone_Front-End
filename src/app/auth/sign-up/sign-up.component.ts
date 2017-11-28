import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // New user object. Used to fix template binding
  newUser = <any>{};

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  signUp() {
    this.auth.signUp(this.newUser.email, this.newUser.password, this.newUser.password_confirmation)
  }
}
