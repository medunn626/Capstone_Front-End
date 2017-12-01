import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './cards.component';
import { CardIndexComponent } from './card-index/card-index.component';
import { CardNewComponent } from './card-new/card-new.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardShowComponent } from './card-show/card-show.component';

const cardRoutes: Routes = [
    {
        path: 'cards',
        component: CardsComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: '',
                component: CardIndexComponent
            },
            {
                path: 'new',
                component: CardNewComponent
            },
            {
                path: 'edit/:id',
                component: CardEditComponent
            },
            {
                path: ':id',
                component: CardShowComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(cardRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class CardsRoutingModule { }
