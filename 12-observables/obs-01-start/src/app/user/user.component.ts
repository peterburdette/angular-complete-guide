import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // the 'params' in 'this.route' is an observable - it's an observable that is being subscribed to. Observables are constructs to which you subscribe to be informed about the changes in data (params is a stream of route parameters).
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
}
