import { Component, OnInit } from '@angular/core';
import { HeroListService } from '../hero-list.service';
import { Hero } from '../hero';
import { MessagesService } from '../messages.service'

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Array<object>;
  canFly: boolean;


  constructor(private heroService: HeroListService, private messagesService: MessagesService) {
    this.messagesService = messagesService
    this.heroService = heroService
    this.canFly = true;
  }
  selectHero(heroName) {
    this.messagesService.add(`Heroes list component: ${heroName} selected `)
  }
  addHero( value: string) {
    this.heroService.addHero(new Hero(this.heroes.length + 1, 1, value, this.canFly))
  }
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

}
