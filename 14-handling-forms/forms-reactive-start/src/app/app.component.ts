import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    // an object is passed into the new FormGroup - the object can contain controls which are just key/value pairs that are passed via the object to the new FormGroup
  
    // new FormControl is a constructor where arguments get passed in - first arg is the initial state, second arg is a single validator or array of validators that are to be applied to this control, the third arg is a potential asynchronous validator(s)

    // need to bind 'this' to the custom validator (forbiddenNames) because this it is not being called from inside the class
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  // custom validator
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    // checks to see if the value of the control is part of the forbiddenUsernames array, if true then return an object that says the name is forbidden
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  // the setTimeout is simulating the server response
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        // currently checking for a single email but can check an array of emails
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      },1500)
    });
    return promise;
  }
}