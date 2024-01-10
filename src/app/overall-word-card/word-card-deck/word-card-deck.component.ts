import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-word-card-deck',
  templateUrl: './word-card-deck.component.html',
  styleUrls: ['./word-card-deck.component.scss']
})
export class WordCardDeckComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}
  wordCardDecks: any[] = [];

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.wordCardDecks = data['wordCardDecks']; // Use array notation to access the property
      console.log('Received data in MFE:', this.wordCardDecks);
      // Now you can use 'myData' in your MFE component as needed
    });
  }

}
