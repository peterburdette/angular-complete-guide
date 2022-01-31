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
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };
  submitted: boolean = false;

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

    // assigns the values to the new 'user' property for output on the DOM after the form submission
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    // sets the form submitted property to true to show the results
    this.submitted = true;

    // resets the form after submission - this will not only clear the fields but reset the state of the form as well
    this.signupForm.reset();
  }

  onReset() {
    this.signupForm.reset();
  }
}
