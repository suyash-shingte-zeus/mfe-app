import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {

  constructor() { }

  @Input() flashCardList: any[] = [];

  ngOnInit(): void {
  }

}
