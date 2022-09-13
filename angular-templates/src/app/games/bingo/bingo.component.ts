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
     /*
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
    */
    let rollingBall = <HTMLElement>document.querySelector('#rollDball');
    let rollingBallRotation = <HTMLElement>document.querySelector('#nlabel');
    rollingBall.style.transition = 'all 5s ease-out';
    rollingBallRotation.style.transition = 'all 5s ease-out';
    //rollingBall.style.transform = `rotate(${3600}deg),translate(300px,0)`;
    rollingBall.style.transform = `translate(-200px,0)`;
    rollingBallRotation.style.transform = `rotate(${-3600}deg)`;
    rollingBallRotation.innerHTML = num;
    //rollingBall.classList.add('animSpinRight');

    rollingBall.addEventListener('transitionend', () => {
      // Remove blur
      console.log('transition complete');
      //rollingBall.classList.remove('animSpinRight');
     // rollingBall.classList.remove('animSpinLeft');
      rollingBall.style.transition = 'none';
      rollingBallRotation.style.transition = 'none';
      rollingBallRotation.style.transform =  `rotate(${0}deg)`;
      rollingBall.style.transform = `translate(500px,0)`;
      //rollingBall.style.transform = `rotate(${10}deg)`;
    })
    //rollingBall.classList.remove('animSpinRight');
    //rollingBall.classList.remove('animSpinLeft');
    //rollingBall.classList.add('animSpinRight');


  }
  onRerenderTicket = (e) =>{
    console.log('catch event !!!!',e);
  }
  generateUniqNumber = (currentArray) => {
    let anotherNumber = (Math.floor(Math.random() * 100 + 1));
    while (currentArray.includes(anotherNumber)){
      anotherNumber = (Math.floor(Math.random() * 100 + 1));
    }
   return anotherNumber;
  }
  generateRandomTicket = () => {
    let randomArray = Array.from({ length: 24 }, () => (Math.floor(Math.random() * 100 + 1)));
    let newTicketArray = [...new Set(randomArray)];
   while (newTicketArray.length <= 23){

      newTicketArray.push(this.generateUniqNumber(newTicketArray));
   } 
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
  generateNewBall = () =>{
    let newWinBall = Math.floor(Math.random() * 100 + 1);
    return newWinBall;
  }
  getBall = () => {
        console.log('getBall', this.winBalls);
        let newWinBall =this.generateNewBall();
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
