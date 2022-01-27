import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSubscription = this.userService.activatedEmitter.subscribe(
      (didActivate) => {
        // didActivate is the true boolean value that is passed in via the service from the user.component
        this.userActivated = didActivate;
      }
    );
  }

  // One important note, just as with your own observables, you should unsubscribe to your subjects though whenever you don't need them. So add onDestroy here to the app component which you need to import or to any other component where you set up a subscription to your subject.
  ngOnDestroy(): void {
    this.activatedSubscription.unsubscribe();
  }
}
