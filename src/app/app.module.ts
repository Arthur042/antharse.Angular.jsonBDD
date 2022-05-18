import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { HeaderMapComponent } from './components/header-map/header-map.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './components/footer/footer.component';
import { CoopyrightComponent } from './components/coopyright/coopyright.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { CitysComponent } from './components/citys/citys.component';
import { CityDetailComponent } from './components/city-detail/city-detail.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminNewCityComponent } from './components/admin/admin-new-city/admin-new-city.component';
import { FormsModule } from '@angular/forms';
import { AdminNewHeroeComponent } from './components/admin/admin-new-heroe/admin-new-heroe.component';
import { AdminHommeHeroesComponent } from './components/admin/admin-homme-heroes/admin-homme-heroes.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderMapComponent,
    HeroesListComponent,
    HeroeComponent,
    ItemsComponent,
    ItemComponent,
    FooterComponent,
    CoopyrightComponent,
    HomeComponent,
    CitysComponent,
    CityDetailComponent,
    AdminHomeComponent,
    AdminNewCityComponent,
    AdminNewHeroeComponent,
    AdminHommeHeroesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
