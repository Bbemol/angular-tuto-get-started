import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroListService } from '../hero-list.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [ HeroListService ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  heroes: Array<Hero>;

  constructor( private route: ActivatedRoute, private heroService: HeroListService ) {
    heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.hero = this.heroes[+params.get('heroId') - 1];
    });
  }

}
