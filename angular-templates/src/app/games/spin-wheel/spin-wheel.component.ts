import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.component.html',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('spinDwheel', [
      // ...
      state('start', style({
        opacity: 1,
      })),
      state('idle', style({
        opacity: 1,
      })),
      state('spinning', style({
        transform: 'rotate(360deg)' ,
        opacity: 0.5,
      })),
      transition('idle => spinning', [
        animate('3s')
      ]),
    ]),
  ],
  
  styleUrls: ['./spin-wheel.component.scss']
})
export class SpinWheelComponent implements OnInit {
  public wheelClass:string = 'idle';
  constructor() { }
  isOpen = true;
  spinning = false;
  spinTime = '3s';
  finallRotation = 90;
  public opacityTest:number =0.9;
  ngOnInit(): void {
  }
  spin():void {
    console.log('spin');
    //this.wheelClass = 'animateFullSpin';
    this.spinning = !this.spinning;
    setTimeout(()=> { this.spinning = false},5000);
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
  onAnimationEvent(event: any) {
    // openClose is trigger name in this example
    console.warn('Animation Trigger:',event);
  }
}
