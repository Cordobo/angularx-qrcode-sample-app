import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularx-qrcode-sample-app';

  public qrdata: string = null;
  constructor() {
    console.log('AppComponent running');
    this.qrdata = 'Initial QR code data string';
  }

  // value = "xxx"
  // size = "300"
  // errorCorrectionLevel = "M"
  // errorCorrectionLevels = ["L", "M", "Q", "H"]

  // get example() {
  //   return `<qr-code value="${this.value}" size="${this.size}" errorCorrectionLevel="${this.errorCorrectionLevel}"></qr-code>`
  // }

  changeValue(newValue: string): void {
    this.qrdata = newValue;
  }

}
