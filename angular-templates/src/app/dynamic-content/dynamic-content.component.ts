import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss']
})
export class DynamicContentComponent implements OnInit {

  constructor() { }
  name = new FormControl('');
  ngOnInit(): void {
  }
generate(){
  console.log('generate');
}
}
