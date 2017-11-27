import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthService } from '../auth/auth.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SignUpComponent,
    LoginComponent,
    ChangePasswordComponent
  ],
  providers: [AuthService]
})
export class AuthModule { }
