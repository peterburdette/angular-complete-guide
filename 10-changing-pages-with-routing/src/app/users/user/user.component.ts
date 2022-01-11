import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  // the ActivatedRoute object that is injected will give access to the id passed into the URL => selected user
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route);
    // stores the parameters from the url within 'user'
    this.user = {
      // retrieves the parameters from within the url
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"],
    };

    // an observable (in this case it is 'params') is an easy way to subscribe to some event which might happen in the future, to then exectue some code when it happens without having to wait for it now
    // the subscribe() method will fire whenever new data is sent through the observable (aka whenever the parameters change in this use case)
    this.route.params.subscribe((params: Params) => {
      this.user.id = params["id"];
      this.user.name = params["name"];
    });
  }
}
