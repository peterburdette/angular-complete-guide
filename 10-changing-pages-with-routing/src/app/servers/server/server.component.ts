import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router, Data } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      // "sever" has to match the name of the property within the resolver inside of app-routing.module.ts
      this.server = data["server"];
    });
    // const id = +this.route.snapshot.params["id"];
    // this.server = this.serversService.getServer(1);
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params["id"]);
    // });
  }

  onEdit() {
    // sets up a relative link for when the edit button is clicked
    // queryParamsHandling takes a string as a value and allows the url to 'preserve' or 'merge' the old param values when directing to the new page instead of overwritting them
    this.router.navigate(["edit"], {
      relativeTo: this.route,
      queryParamsHandling: "preserve",
    });
  }
}
