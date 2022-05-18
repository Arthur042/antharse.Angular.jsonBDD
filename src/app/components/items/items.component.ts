import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from 'src/app/models/heroes';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() hero!: Heroes;
  @Input() theme !: string;
  
  constructor() { }

  ngOnInit(): void {
   
  }

}
