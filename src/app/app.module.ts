import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module'
import { AuthRoutingModule } from './auth/auth-routing.module'
import { AuthService } from './auth/auth.service';

import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { MainService } from './main/main.service'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule
  ],
  providers: [AuthService, MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
