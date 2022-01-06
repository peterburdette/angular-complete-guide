import { Component, OnInit } from "@angular/core";
import { AccountsService } from "./accounts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AccountsService], // because of the trickle down effect, AccountsService needs to be provided at the top level component
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    // setting the accounts property to the accounts array which is found in the AccountsService
    this.accounts = this.accountsService.accounts;
  }
}
