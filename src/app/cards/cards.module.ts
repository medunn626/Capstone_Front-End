import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CardIndexComponent } from './card-index/card-index.component';
import { CardsComponent } from './cards.component';
import { CardNewComponent } from './card-new/card-new.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardShowComponent } from './card-show/card-show.component';
import { CardsService } from './cards.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [CardIndexComponent, CardsComponent, CardNewComponent, CardEditComponent, CardShowComponent],
  providers: [CardsService]
})
export class CardsModule { }
