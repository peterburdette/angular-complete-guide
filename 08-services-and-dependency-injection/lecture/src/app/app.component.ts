import { Component, OnInit } from "@angular/core";
import { AccountsService } from "./accounts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AccountsService], // The Angular dependency injector is a hierarchical injector. That means that if we provide a service in some place of our app the Angular framework knows how to create an instance of that service for the top level component and all child components. Essentially this means that if the service is defined at the highest level, all child components will receive the same instance of that service definition.
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    // setting the accounts property to the accounts array which is found in the AccountsService
    this.accounts = this.accountsService.accounts;
  }
}
