import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCardDeckComponent } from './word-card-deck/word-card-deck.component';
import { WordCardComponent } from './word-card/word-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WordCardDeckComponent,
    WordCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WordCardDeckComponent
      }
    ])
  ]
})
export class OverallWordCardModule { }
