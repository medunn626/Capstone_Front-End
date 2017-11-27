import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  // Not bound to multiple inputs, no object needed
  oldPassword: string
  newPassword: string

  constructor() { }

  ngOnInit() {
  }

}
