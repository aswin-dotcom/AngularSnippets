import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'setandpatch';

  reactiveForms: FormGroup;
  user:string;

  ngOnInit() {
    this.reactiveForms = new FormGroup({
      Firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      username: new FormControl(''),
    });
  }

  handleUsername() {
    // this.reactiveForms.setValue({
    //   Firstname: this.reactiveForms.get('Firstname').value,
    //   lastname:this.reactiveForms.get('lastname').value,
    //   username: this.getusername()
    // });
     this.reactiveForms.patchValue({
      username: this.getusername()
     })
  }
  getusername(){
    let date =  new Date();

   this.user =  this.reactiveForms.get('Firstname').value.slice(0,3)+ this.reactiveForms.get('lastname').value.slice(0,3)+date.getFullYear();
   return this.user;
  }
}
