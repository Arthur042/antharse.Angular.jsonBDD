import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Heroes } from 'src/app/models/heroes';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes !: Heroes[];

  @Output() nameEmitter: EventEmitter<Heroes> = new EventEmitter<Heroes>();
  @Input() theme !: string;
  constructor(private HeroesService : HeroesService) { }

  ngOnInit(): void {
    this.HeroesService.findAllHeroes().subscribe(data => {
      this.heroes = data;
    })
  }

  name($event: Heroes){
    this.nameEmitter.emit($event);
  }
}