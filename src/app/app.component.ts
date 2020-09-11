import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.components.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  heroes: Array<object>;
  currentInput: string;
  birthday: Date;
  price: string;
  format: string;

  constructor() {
    this.title = 'angular-tuto1'
    this.currentInput = '';
    this.birthday = new Date(1988, 3, 15);
    this.price = '54.4';
    this.format = 'longDate';
  }

  onNotify() {
    window.alert('Activate power boost');
  }
  onDeactivate() {
    window.alert('you deactivated the power')
  }

  toggleFormat() {
    this.format === 'longDate' ? this.format = 'shortDate' : this.format = 'longDate'
  }
}
