import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import { CardComponent } from './cards/card.component';
import { SecondCardsComponent } from './second-cards/second-cards.component';
import { Cardnum3Component } from './card_num3/cardnum3.component';
import { CardNum4Component } from './card-num4/card-num4.component';
import { CardNum5Component } from './card-num5/card-num5.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'cards',
        component: CardComponent,
      },
      {
       path: 'second-cards',
       component: SecondCardsComponent
      },
      {
        path: 'card_num3',
        component: Cardnum3Component
      },
      {
        path: 'card_num4',
        component: CardNum4Component
      },
      {
        path: 'card_num5',
        component: CardNum5Component
      }
    ]
  }
]



@NgModule({
  declarations: [
    CardComponent,
    SecondCardsComponent,
    Cardnum3Component,
    CardNum4Component,
    CardNum5Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
