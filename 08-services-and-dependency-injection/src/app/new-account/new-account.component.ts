import { Component } from "@angular/core";
import { AccountsService } from "../accounts.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService], // with this added Angular will recognize, when analyzing the component, that it should provide a 'loggingService' and it will set itself up to do so
})
export class NewAccountComponent {
  // this informs Angular that we will need an instance of the LoggingService
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);

    // using a service by injecting the service here
    this.loggingService.logStatusChange(accountStatus);
    // console.log("A server status changed, new status: " + accountStatus);
  }
}
