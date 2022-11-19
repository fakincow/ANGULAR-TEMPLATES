import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
export type FormType = 'name' | 'profile';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  editor: FormType = 'name';
  constructor() { }

  ngOnInit(): void {
  }
  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: FormType) {
    this.editor = type;
  }
}
