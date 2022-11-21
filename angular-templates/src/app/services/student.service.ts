import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../student';


@Injectable({
  providedIn: 'root'
})

export class StudentService {
    constructor(private http:HttpClient) { }
private _url:string = "./assets/data/students.js"
getStudents():Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this._url)
}
}
  