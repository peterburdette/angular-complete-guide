import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // the form 'data' is being stored in 'signupForm'
  @ViewChild("data") signupForm: NgForm;

  suggestUserName() {
    const suggestedName = "Superuser";
  }

  // solution using onSubmit() with one argument being passed
  // onSubmit(formData: NgForm) {
  //   console.log(formData.form.value);
  // }

  // alternate way using @ViewChild
  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.form.value);
  }
}
