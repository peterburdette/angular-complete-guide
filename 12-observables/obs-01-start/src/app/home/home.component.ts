import { Component, OnDestroy, OnInit } from "@angular/core";

import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  // created a property that will be used to store the interval subscription (type is 'Subscription') so that onDestroy can be implemented to unsubscribe from the current subscription
  private firstObservableSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // 'interval' is the observable that is imported from rxjs
    // Observables don't necesarily stop emitting values just because we navigate away from a page. There are certain observables that emit a value once and then they're done, like for example an HTTP request where you get back a response. There are other observables that keep on emitting values and need to be stopped to prevent memory leaks.
    this.firstObservableSubscription = interval(1000).subscribe((count) => {
      console.log(count);
    });
  }

  ngOnDestroy(): void {
    // unsubscribes from the active interval subscription
    this.firstObservableSubscription.unsubscribe();
  }
}
