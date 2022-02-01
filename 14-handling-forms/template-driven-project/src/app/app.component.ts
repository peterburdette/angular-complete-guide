import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  subscriptions = ["Basic", "Advanced", "Pro"];
  defaultSub: string = this.subscriptions[1];
  subscription = {
    email: "",
    subType: "",
    password: "",
  };
  submitted: boolean = false;

  @ViewChild("data") registerForm: NgForm;

  onSubmit() {
    // console.log(this.registerForm);
    console.log(this.registerForm.form.value);

    this.subscription.email = this.registerForm.form.value.email;
    this.subscription.subType = this.registerForm.form.value.subscription;
    this.subscription.password = this.registerForm.form.value.password;

    this.submitted = true;
  }
}
