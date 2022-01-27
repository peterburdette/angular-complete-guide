import { Component, OnDestroy, OnInit } from "@angular/core";

import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

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
    // Operators can be used on any observable. Every observable has a pipe method. The observable with the pipe method needs to be subscribed to otherwise the data format within the observable will only show the basic subscription output.
    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data) => {
          // return true if data is greater than 0
          return data > 0;
        }),

        // So this is the map operator and again just as before, this is kind of a constructed example here, it is of course more useful for example if you're fetching complex data from a web server and you want to transform that data before you use it in a component.
        map((data: number) => {
          return "Round: " + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error);
        },
        () => {
          console.log("Completed!");
          alert("Completed!");
        }
      );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
