import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-map',
  templateUrl: './header-map.component.html',
  styleUrls: ['./header-map.component.css']
})
export class HeaderMapComponent implements OnInit {
 @Input() theme !: string;
  constructor() { }

  ngOnInit(): void {
  }

}
