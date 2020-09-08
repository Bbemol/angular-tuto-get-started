import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core"
import { Output, EventEmitter } from "@angular/core"

@Component({
  selector: 'app-power-boost',
  templateUrl: './power-boost.component.html',
  styleUrls: ['./power-boost.component.css']
})
export class PowerBoostComponent implements OnInit {
  @Input() hero;
  @Output() notify = new EventEmitter();
  @Output() notify2 = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  powerUp(hero) {
    hero.power += 6;
  }

}
