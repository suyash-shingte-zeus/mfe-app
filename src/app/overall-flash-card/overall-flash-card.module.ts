import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashCardDeckComponent } from './flash-card-deck/flash-card-deck.component';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FlashCardDeckComponent,
    FlashCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FlashCardDeckComponent
      }
    ])
  ]
})
export class OverallFlashCardModule { }
