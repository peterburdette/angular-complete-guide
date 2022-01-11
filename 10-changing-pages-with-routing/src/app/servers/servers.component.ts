import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ServersService } from "./servers.service";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // a second argument needs to be passed to the navigate() method to configure a navigation action
    // this.route tells Angular what the currently active route is
    // this.router.navigate(["servers"], { relativeTo: this.route });
  }
}
