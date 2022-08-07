import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.scss']
})
export class BingoCardComponent implements OnInit {
 
  constructor() { }
  @Input() value:any;
  @Input() winners:any;

  ngOnInit(): void {
  }
 
  sortByValue(a: any, b: any) {

    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
    return 0;
  }
}
