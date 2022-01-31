import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  subscriptions = ["Basic", "Advanced", "Pro"];

  onSubmit(data) {
    console.log(data);
  }
}
