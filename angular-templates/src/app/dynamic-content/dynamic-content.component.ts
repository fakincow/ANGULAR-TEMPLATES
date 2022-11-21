import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss']
})
export class DynamicContentComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: Document) { }
  name = new FormControl('');
  ngOnInit(): void {
  }
generate(inValue){
  console.log('generate',inValue);

  this.document.getElementById('dynamicContent').append(inValue);
let x =  this.document.createElement("INPUT");
x.setAttribute("type", "text");
x.setAttribute("value", "Hello World!");
this.document.body.appendChild(x);
var selectDropDown =  this.document.createElement("SELECT");
selectDropDown.setAttribute("id", "mySelect");
this.document.getElementById('dynamicContent').appendChild(selectDropDown);
let optionsArray = ["opt 1", "opt2", "opt3"];
optionsArray.forEach((el) => {
  let z =  this.document.createElement("option");
  var t =  this.document.createTextNode(el);
  z.appendChild(t);
  this.document.getElementById("mySelect").appendChild(z);
});

}
}
