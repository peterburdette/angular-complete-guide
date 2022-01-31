import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  defaultQuestion = "pet";
  answer: string;
  genders = ["male", "female"];

  // the form 'data' is being stored in 'signupForm'
  @ViewChild("data") signupForm: NgForm;

  suggestUserName() {
    const suggestedName = "Superuser";
    // solution using setValue() method - this will alter and override all properties and their respective values within the object
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "",
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male",
    // });

    // solution using the patchValue() method (this method is only available on the 'form' wrapped by ngForm) - this will only alter specific property values within the object
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
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
