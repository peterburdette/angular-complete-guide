import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  interval;
  // @Output() is a directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance. 'intervalFired' is the 'click' event that is tied to the app-game-control component in the app.component.
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    this.interval = setInterval(() => {
      // .emit() Emits an event containing a given value.
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    // passing this.interval will clear the interval - this.interval is the reference
    clearInterval(this.interval);
  }
}
