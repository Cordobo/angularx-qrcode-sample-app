import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angularx-qrcode-sample-app";

  public qrdata: string = null;
  public elementType: "img" | "url" | "canvas" | "svg" = null;
  public scale: number = 1;

  constructor() {
    this.qrdata = "Initial QR code data string";
    this.elementType = "img";
    this.scale = 4;
  }

  changeValue(newValue: string): void {
    this.qrdata = newValue;
  }

  changeElementType(newValue: "img" | "url" | "canvas" | "svg"): void {
    this.elementType = newValue;
  }
}
