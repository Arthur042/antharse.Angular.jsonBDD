import { Component, OnInit } from '@angular/core';
import { Heroes } from 'src/app/models/heroes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'boostrappTheme';
  heroClicked!: Heroes;
  newTheme!: string;

  constructor() { }

  ngOnInit(): void {
  }

  name(hero:Heroes){
    this.heroClicked = hero;
  }
}
