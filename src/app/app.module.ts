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

import { MainComponent } from './main/main.component';

import { CardsRoutingModule } from './cards/cards-routing.module';
import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
    CardsModule,
    CardsRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
