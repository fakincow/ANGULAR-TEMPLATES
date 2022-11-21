import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
public students : any[] =[];
  constructor(private _studentService:StudentService) { }
  isPromis = new Promise<string>((resolve,reject) => {
    console.log('promise starts');
  })
myObservable = new Observable(observable => {
  console.log('observable starts');
  observable.next("a");
  observable.next("b");
  observable.next("c");
})
  ngOnInit(): void {
    this.myObservable.subscribe((val => {
      console.log(val);
    }));
    this._studentService.getStudents()
    .subscribe(data => this.students = data)
  }

}
