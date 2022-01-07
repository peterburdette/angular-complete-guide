import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

// @Injectable() is a decorator that marks a class as available to be provided and injected as a dependency. This should now be used within all services as per Angular best practices.
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  // 'statusUpdated' is the event which will pass on the new status to other components - works in tandem with '.emit()' which allows the status to be sharable between components
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
