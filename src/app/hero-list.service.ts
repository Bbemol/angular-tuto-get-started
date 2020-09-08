import { Injectable } from '@angular/core';
import { Hero } from './hero';
@Injectable({
  providedIn: 'root'
})
export class HeroListService {
  private heroes: Hero[] = [];

  constructor() { 
    this.heroes = [
      new Hero(1, 1, 'Josh Homme', true),
      new Hero(2, 13, 'Kurt Cobain', true),
      new Hero(3, 2, 'Jimi Hendrix', true),
      new Hero(4, 3, 'Dave Grohl', true)
    ]
   }

  getHeroes() {
    return this.heroes;
  }

  addHero(newHero: Hero) {
    this.heroes.push(newHero)
  }
}
