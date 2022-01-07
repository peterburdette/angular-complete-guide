import { Component, Input } from "@angular/core";
import { AccountsService } from "../accounts.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);

    // this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);

    // this is using the 'statusUpdated' property in the 'accounts.service.ts' to make the status accessible for any component that wants to use it.
    this.accountsService.statusUpdated.emit(status);
  }
}
