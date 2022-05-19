import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faPlusCircle, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Heroes } from 'src/app/models/heroes';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-admin-homme-heroes',
  templateUrl: './admin-homme-heroes.component.html',
  styleUrls: ['./admin-homme-heroes.component.css']
})
export class AdminHommeHeroesComponent implements OnInit {
  heroes !: Heroes[];
  faTrash = faTrashCan;
  faPen = faPenToSquare;
  faPlus = faPlusCircle;
  constructor(private HeroesService : HeroesService) { }
  
  ngOnInit(): void {
    this.HeroesService.findAllHeroes().subscribe(data => {
      this.heroes = data;
    })
  }

  deleteHeroe(id ?: number){
    this.HeroesService.deleteHeroe(id);
  }
  
}