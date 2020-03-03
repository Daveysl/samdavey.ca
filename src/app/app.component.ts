import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public navOn:boolean = false;

  constructor() {}

  public toggleNav():void {
      this.navOn = !this.navOn;
  }


}
