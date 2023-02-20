import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit() {
    // an object is passed into the new FormGroup - the object can contain controls which are just key/value pairs that are passed via the object to the new FormGroup
  
    // new FormControl is a constructor where arguments get passed in - first arg is the initial state, second arg is a single validator or array of validators that are to be applied to this control, the third arg is a potential asynchronous validator(s)
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}