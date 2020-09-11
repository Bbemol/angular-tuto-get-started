import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PowerBoostComponent } from './power-boost/power-boost.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    PowerBoostComponent,
    HeroDetailComponent,
    HeroesListComponent,
    DashboardComponent
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
