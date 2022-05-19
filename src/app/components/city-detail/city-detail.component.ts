import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Citys } from 'src/app/models/citys';
import { CitysService } from 'src/app/services/citys.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  id !: number;
  cityDisplay !: Citys;
  newTheme!: string;

  constructor(private activatedRoute: ActivatedRoute, private CitysService : CitysService) { }

  ngOnInit(): void {
    this.id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.CitysService.findById(this.id).subscribe(data => {
      this.cityDisplay = data
    });
  }

}
