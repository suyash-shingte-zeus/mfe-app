import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverallWordCardModule } from './overall-word-card/overall-word-card.module';
import { OverallFlashCardModule } from './overall-flash-card/overall-flash-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverallWordCardModule,
    OverallFlashCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
