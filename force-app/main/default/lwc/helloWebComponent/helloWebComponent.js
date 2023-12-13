import { LightningElement } from "lwc";

export default class HelloWebComponent extends LightningElement {
  greeting = "";
  handleGreetingChange(event) {
    this.greeting = event.target.value;
  }
  currentDate = new Date().toDateString();
  get capitalizedGreeting() {
    return `Hello ${this.greeting.toUpperCase()}`;
  }
}
