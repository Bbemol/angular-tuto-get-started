import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
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

  getHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }

  addHero(newHero: Hero) {
    this.heroes.push(newHero)
  }
}
