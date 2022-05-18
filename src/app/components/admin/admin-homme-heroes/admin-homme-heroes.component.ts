import { Component, OnInit } from '@angular/core';
import { Heroes } from 'src/app/models/heroes';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-admin-homme-heroes',
  templateUrl: './admin-homme-heroes.component.html',
  styleUrls: ['./admin-homme-heroes.component.css']
})
export class AdminHommeHeroesComponent implements OnInit {
  heroes: Heroes[] = this.HeroesService.heroes;
  constructor(private HeroesService : HeroesService) { }
  
  ngOnInit(): void {
  }
  
}