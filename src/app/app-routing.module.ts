import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component'
import { ChangePasswordComponent } from './auth/change-password/change-password.component'
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'auth/change-password',
    component: ChangePasswordComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
