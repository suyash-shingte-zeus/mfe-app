import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flash-card-deck',
  templateUrl: './flash-card-deck.component.html',
  styleUrls: ['./flash-card-deck.component.scss']
})
export class FlashCardDeckComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  flashCardDecks: any[] = [];

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.flashCardDecks = data['flashCardDecks']; // Use array notation to access the property
      console.log('Received data in MFE:', this.flashCardDecks);
      // Now you can use 'myData' in your MFE component as needed
    });
  }

}
