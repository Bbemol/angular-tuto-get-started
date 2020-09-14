import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { MessagesService } from './messages.service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroListService {
  private heroes: Hero[] = [];

  constructor(private messagesService: MessagesService) { 
    this.heroes = [
      new Hero(1, 1, 'Josh Homme', true),
      new Hero(2, 13, 'Kurt Cobain', true),
      new Hero(3, 2, 'Jimi Hendrix', true),
      new Hero(4, 3, 'Dave Grohl', true)
    ]
   }

  getHeroes(): Observable<Hero[]> {
    this.messagesService.add('HeroService: fetched heroes');
    return of(this.heroes);
  }

  addHero(newHero: Hero) {
    this.heroes.push(newHero)
  }
}
