import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {
  constructor() {}

  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
}
