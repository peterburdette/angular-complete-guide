import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-odd",
  templateUrl: "./odd.component.html",
  styleUrls: ["./odd.component.css"],
})
export class OddComponent implements OnInit {
  // @Input() allows data from outside the component to be passed into the component
  @Input() number: number;

  constructor() {}

  ngOnInit(): void {}
}
