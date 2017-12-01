import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../main/main.component'
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'change-password',
        component: ChangePasswordComponent
      }
    ]
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
