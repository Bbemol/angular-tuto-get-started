import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroTestComponent } from './hero-detail/hero-test/hero-test.component';
import { HeroChildComponent } from './hero-detail/hero-child/hero-child.component';
// import { HeroChildComponent } from './test/hero-child/hero-child.component';
// import { HeroChild2Component } from './test/hero-child2/hero-second.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'heroes', component: HeroesListComponent
  },
  {
    path: 'heroes/hero/:heroId', component: HeroDetailComponent,
    children: [
      {
        path: 'herochild',
        component: HeroTestComponent
      },
      {
        path: 'herochild2',
        component: HeroChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
