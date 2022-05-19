import { Component, Input, OnInit } from '@angular/core';
import { Citys } from 'src/app/models/citys';
import { CitysService } from 'src/app/services/citys.service';

@Component({
  selector: 'app-citys',
  templateUrl: './citys.component.html',
  styleUrls: ['./citys.component.css']
})
export class CitysComponent implements OnInit {
  @Input() theme !: string;
  citys !: Citys[];

  constructor(private CitysService : CitysService) { }

  ngOnInit(): void {
    this.CitysService.findAllCitys().subscribe(data => {
      this.citys = data;
    })
  }

}
