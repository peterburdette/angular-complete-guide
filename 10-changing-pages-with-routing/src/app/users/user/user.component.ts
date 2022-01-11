import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

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
  }
}
