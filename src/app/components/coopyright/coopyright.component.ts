import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coopyright',
  templateUrl: './coopyright.component.html',
  styleUrls: ['./coopyright.component.css']
})
export class CoopyrightComponent implements OnInit {
  @Input() theme !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
