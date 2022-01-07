import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    // on initilization set the inactive users to the users property
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    // calls the 'onSetToActive' method inside of the usersService Service and passes the id
    this.usersService.onSetToActive(id);
  }
}
