import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PowerBoostComponent } from './power-boost/power-boost.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroTestComponent } from './hero-detail/hero-test/hero-test.component';
import { HeroChildComponent } from './hero-detail/hero-child/hero-child.component';
import { MessagesComponent } from './messages/messages.component';
// import { HeroChildComponent } from './test/hero-child/hero-child.component';
// import { HeroChild2Component } from './test/hero-child2/hero-second.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerBoostComponent,
    HeroDetailComponent,
    HeroesListComponent,
    DashboardComponent,
    HeroTestComponent,
    HeroChildComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
