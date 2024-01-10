import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss']
})
export class WordCardComponent implements OnInit {

  constructor() { }

  @Input() wordCardList: any[] = [];
  ngOnInit(): void {
  }

}
