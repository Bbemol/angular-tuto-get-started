import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroListService } from '../hero-list.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero;
  heroes;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroListService
  ) {
    this.heroes = heroService.getHeroes()
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.hero = this.heroes[+params.get('heroId')];
    });
  }

}
