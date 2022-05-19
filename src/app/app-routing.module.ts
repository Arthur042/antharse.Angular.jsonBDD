import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCityUpdateComponent } from './components/admin/admin-city-update/admin-city-update.component';
import { AdminHeroeUpdateComponent } from './components/admin/admin-heroe-update/admin-heroe-update.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminHommeHeroesComponent } from './components/admin/admin-homme-heroes/admin-homme-heroes.component';
import { AdminNewCityComponent } from './components/admin/admin-new-city/admin-new-city.component';
import { AdminNewHeroeComponent } from './components/admin/admin-new-heroe/admin-new-heroe.component';
import { CityDetailComponent } from './components/city-detail/city-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'city/:id', component: CityDetailComponent},
  {path: 'admin/citys', component: AdminHomeComponent},
  {path: 'admin/heroes', component: AdminHommeHeroesComponent},
  {path: 'admin/citys/add', component: AdminNewCityComponent},
  {path: 'admin/heroe/add', component: AdminNewHeroeComponent},
  {path: 'admin/citys/update/:id', component: AdminCityUpdateComponent},
  {path: 'admin/heroes/update/:id', component: AdminHeroeUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
