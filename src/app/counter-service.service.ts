import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterServiceService {
  activeCount = 0;
  inActivecount = 0;

  constructor() {}

  addInactive() {
    this.inActivecount++;
    console.log("inactive: " + this.inActivecount);
  }

  addActive() {
    this.activeCount++;
    console.log("active: " + this.activeCount);
  }
}
