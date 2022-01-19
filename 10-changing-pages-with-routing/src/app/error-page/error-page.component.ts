import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: "app-error-page",
  templateUrl: "./error-page.component.html",
  styleUrls: ["./error-page.component.css"],
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot);

    // both solutions below are valid
    // (1) - this solution is the basic solution that utilizes the route snapshot to get the data message
    // this.errorMessage = this.route.snapshot.data["message"];

    // (2) - this solution is the better one if the parameters in the URL could possibly change while a user is on a specific page
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data["message"];
    });
  }
}
