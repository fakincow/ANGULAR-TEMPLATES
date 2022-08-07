import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {

  constructor() { }
  public winBalls: number[] = [];
  showRollingBallAnim = (num) => {
    let rollingBall = <HTMLElement>document.querySelector('.rolling-ball');

    //rollingBall.style.transition = 'all 10s ease-out';
   //rollingBall.style.transform = `rotate(${3600}deg)`;

    rollingBall.classList.add('animSpinRight');
    rollingBall.addEventListener('transitionend', () => {
      // Remove blur
      //rollingBall.classList.remove('blur');
      rollingBall.style.transition = 'none';
      rollingBall.style.transform = `rotate(${10}deg)`;
    })
  }
  generateUniqNumber = (currentArray) => {
    let anotherNumber = (Math.floor(Math.random() * 100 + 1));
    while (currentArray.includes(anotherNumber)){
      anotherNumber = (Math.floor(Math.random() * 100 + 1));
    }
    console.log('generateUniqNumber>>>>>>>>>>>>>', anotherNumber);
   return anotherNumber;
  }
  generateRandomTicket = () => {
    let randomArray = Array.from({ length: 24 }, () => (Math.floor(Math.random() * 100 + 1)));
    let newTicketArray = [...new Set(randomArray)];
   while (newTicketArray.length <= 23){

      newTicketArray.push(this.generateUniqNumber(newTicketArray));
   } 
    console.log('>>>>>>>>>>>>>', newTicketArray);
    return newTicketArray;
  }

  newGame = () =>{
    console.log('newGame', this.winBalls);
    this.winBalls = [];
    this.cards = [];
    for(let i=0;i<10;i++){
      this.cards.push(this.generateRandomTicket());
    }
  }
  getBall = () => {
        console.log('getBall', this.winBalls);
        let newWinBall = Math.floor(Math.random() * 100 + 1);
        this.winBalls.push(newWinBall);
        this.winBalls = [...this.winBalls];
        this.showRollingBallAnim(newWinBall);
   
      }
  public cards = [];
  ngOnInit(): void {
    this.cards = [];
    for(let i=0;i<10;i++){
      this.cards.push(this.generateRandomTicket());
    }
  }

}
