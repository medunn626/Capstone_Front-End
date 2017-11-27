import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // User object. Used to fix template binding
  user = <any>{};

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.user.email, this.user.password)
  }

  }
