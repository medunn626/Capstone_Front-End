import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from '../auth/auth.component';
import { ChangePasswordComponent } from '../auth/change-password/change-password.component';
import { AuthService } from '../auth/auth.service'
import { MainService } from './main.service'
import { MainComponent } from './main.component'

const mainRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'change-password',
        component: ChangePasswordComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthService, MainService]
})
export class MainModule { }
