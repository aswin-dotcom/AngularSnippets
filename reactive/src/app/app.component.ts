import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'reactive';
  reactiveForm: FormGroup;
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormGroup({
        street: new FormControl(null, [Validators.required]),
        pincode: new FormControl(null, [
          Validators.required,
          Validators.maxLength(6),
        ]),
      }),
      skills:new FormArray([
        new FormControl(null,Validators.required),
        new FormControl(null,Validators.required),
        new FormControl(null,Validators.required)
      ])
    });
  }
  handlesubmit() {
    console.log(this.reactiveForm);
  }
}
