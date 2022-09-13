import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.scss']
})
export class BingoCardComponent implements OnInit {
 
  constructor() { }
  @Input() value:any;
  @Input() winners:any;
  @Output() rerenderTicket = new EventEmitter();

  ngOnInit(): void {
  }
  onClick = (e) => {
    console.log('on click', e);
    this.rerenderTicket.emit('eeeeeee');
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
