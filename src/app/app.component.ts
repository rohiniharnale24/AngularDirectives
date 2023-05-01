import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isproductAvailable!: boolean;

  productObj = {
    pName: 'samsung ultra s23',
    pid: '12dffff',
  };

  title = 'Directives';
  constructor() {
    this.isproductAvailable = Math.random() >= 0.5 ? true : false;
  }
  getBgColor() {
    return 'orange';
  }
}
function OnInit() {
  //throw new Error('Function not implemented.');
}
