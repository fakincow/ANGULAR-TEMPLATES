import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheel-rotate',
  templateUrl: './wheel-rotate.component.html',
  styleUrls: ['./wheel-rotate.component.scss']
})
export class WheelRotateComponent implements OnInit {
  public deg:number = 0;
  private zoneSize = 45; // deg
  private wheel;
  private startButton;
  private display;
  // Counter clockwise
  public symbolSegments = {
    1: "Frog",
    2: "Snail",
    3: "Dolphin",
    4: "Ladybug",
    5: "Koala",
    6: "Unicorn",
    7: "Dragon",
    8: "Snowman",
  }
  constructor() { }
   handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / this.zoneSize);
    this.display.innerHTML = this.symbolSegments[winningSymbolNr];
  }
  ngOnInit(): void {
    this.wheel = <HTMLElement>document.querySelector('.wheel');
    this.startButton = <HTMLElement>document.querySelector('.button');
    this.display = <HTMLElement>document.querySelector('.display');
  }
  spinDwheel():void {
    console.log('spin d wheel');
    //this.startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    this.deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    this.wheel.style.transition = 'all 10s ease-out';
    // Rotate the wheel
    this.wheel.style.transform = `rotate(${this.deg}deg)`;
    // Apply the blur
    this.wheel.classList.add('blur');
    this.wheel.addEventListener('transitionend', () => {
      // Remove blur
      this.wheel.classList.remove('blur');
      // Enable button when spin is over
      //this.startButton.style.pointerEvents = 'auto';
      // Need to set transition to none as we want to rotate instantly
      this.wheel.style.transition = 'none';
      // Calculate degree on a 360 degree basis to get the "natural" real rotation
      // Important because we want to start the next spin from that one
      // Use modulus to get the rest value
      const actualDeg = this.deg % 360;
      // Set the real rotation instantly without animation
      this.wheel.style.transform = `rotate(${actualDeg}deg)`;
      // Calculate and display the winning symbol
      this.handleWin(actualDeg);
    });
  }
}
