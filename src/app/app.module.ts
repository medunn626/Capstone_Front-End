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
import { MainService } from './main/main.service';
import { CardsComponent } from './cards/cards.component';
import { CardIndexComponent } from './card-index/card-index.component';
import { CardNewComponent } from './card-new/card-new.component';
import { CardShowComponent } from './card-show/card-show.component';
import { CardEditComponent } from './card-edit/card-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    MainComponent,
    CardsComponent,
    CardIndexComponent,
    CardNewComponent,
    CardShowComponent,
    CardEditComponent
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
