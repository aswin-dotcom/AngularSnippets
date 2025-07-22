import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'template-driven';
  @ViewChild('tamplatedrivenform') form: HTMLFormElement;

  handlesubmit() {

    console.log(this.form);
    // console.log(this.form['value'].firtsname);
      console.log(this.form['controls']['firtsname'].value); // ✅ wor
      // console.log(this.form.controls.firstname.value)
  }
}
