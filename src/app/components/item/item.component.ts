import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from 'src/app/models/heroes';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() heroeItem!: Heroes;
  constructor() { }

  ngOnInit(): void {
  }

}
