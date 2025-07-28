import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HTTP-Client';
  http:HttpClient  =  inject(HttpClient);
  reactive!:FormGroup;
  ngOnInit()
  {
    this.reactive =  new FormGroup({
      firstname:new FormControl(''),
      lastname:new FormControl(''),

    })
  }
  handleform()
  {
    const headers  =  new HttpHeaders({'asasas':'Hello-world'});
    // console.log(this.reactive.value);
    this.http.post('https://angularhttpclient-5ffaa-default-rtdb.firebaseio.com/task.json',this.reactive.value,{headers:headers}).subscribe((res)=>{
      console.log(res);
    });
  }

}
