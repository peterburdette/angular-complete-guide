import { Component, OnDestroy, OnInit } from "@angular/core";

import { interval, Subscription, Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    // the 'observer' is the part that is interested in being informed about new data, about errors or about the observable being completed.
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count === 3) {
          // when complete() is called the observable will come to a halt
          observer.complete();
        }

        if (count > 3) {
          // throwing an error will cancel the observable, it will not complete it
          observer.error(new Error("Counter is greater than 3!"));
        }

        count++;
      }, 1000);
    });

    // subscribe takes three arguments:
    // 1 - observable execution handling
    // 2 - error handling
    // 3 - completion handling
    this.firstObsSubscription = customIntervalObservable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        alert(error);
      },
      () => {
        console.log("Completed!");
      }
    );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
