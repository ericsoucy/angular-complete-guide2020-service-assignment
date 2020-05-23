import { Component, OnInit } from "@angular/core";
import { UsersServiceService } from "./users-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private usersService: UsersServiceService) {}

  /*
  onSetToInactive(id: number) {
    this.usersService.addInactiveUser(id);

    //this.inactiveUsers.push(this.activeUsers[id]);
    //this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.usersService.addActiveUser(id);
    //this.activeUsers.push(this.inactiveUsers[id]);
    //this.inactiveUsers.splice(id, 1);
  }*/
}
