import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    // on initilization set the active users to the users property
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    // calls the 'onSetToInactive' method inside of the usersService Service and passes the id
    this.usersService.onSetToInactive(id);
  }
}
