import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordCardDeckComponent } from './overall-word-card/word-card-deck/word-card-deck.component';
import { FlashCardDeckComponent } from './overall-flash-card/flash-card-deck/flash-card-deck.component';

const routes: Routes = [
  {path: '', redirectTo: '/word-card-deck', pathMatch: 'full'},
  {path: 'word-card-deck', component: WordCardDeckComponent},
  {path: 'flash-card-deck', component: FlashCardDeckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
