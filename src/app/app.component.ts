import { Component } from '@angular/core';
import { Hero } from './hero'
import { HeroListService } from './hero-list.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.components.html',
  styleUrls: ['./app.component.css'],
  providers: [ HeroListService ]
})
export class AppComponent {
  title: string;
  heroes: Array<object>;
  currentInput: string;
  birthday: Date;
  price: string;
  format: string;
  canFly: boolean;

  constructor(private heroService: HeroListService) {
    this.title = 'angular-tuto1'
    this.heroes = heroService.getHeroes()
    this.canFly = true;
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

  addHero( value: string) {
    this.heroService.addHero(new Hero(this.heroes.length + 1, 1, value, this.canFly))
  }
  toggleFormat() {
    this.format === 'longDate' ? this.format = 'shortDate' : this.format = 'longDate'
  }
}
