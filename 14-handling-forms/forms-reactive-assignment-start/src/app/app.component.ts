import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];
  blackListedNames = ['Test'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      // 'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'projectName': new FormControl(null, Validators.required, this.forbiddenNames.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Stable'),
    })
  }

  onSubmit() {
    console.log('FormGroup: ', this.projectForm);

    console.log('Project Name: ', this.projectForm.get('projectName').value);
    console.log('Email: ', this.projectForm.get('email').value);
    console.log('Project Status: ', this.projectForm.get('projectStatus').value);
  }

  // forbiddenNames(control: FormControl) {
  //   if (this.blackListedNames.indexOf(control.value) !== -1) {
  //     return { 'invalidName': true }
  //   }
  //   return null;
  // }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.blackListedNames.indexOf(control.value) !== -1) {
          resolve({ 'invalidName': true })
        } else {
          resolve(null);
        }
      }, 2000)
    });
    return promise;
  }
}
