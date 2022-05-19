import { Component, OnInit } from '@angular/core';
import { Citys } from 'src/app/models/citys';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CitysService } from 'src/app/services/citys.service';

@Component({
  selector: 'app-admin-new-city',
  templateUrl: './admin-new-city.component.html',
  styleUrls: ['./admin-new-city.component.css']
})
export class AdminNewCityComponent implements OnInit {
  newCity = new Citys();
  types = ['ville', 'lieu'];

  constructor(private router : Router, private toastr: ToastrService, private CitysService : CitysService) { }

  ngOnInit(): void {
  }

  addPlace():void {
    this.CitysService.addCitys(this.newCity).subscribe(data => {
      this.router.navigate(['/admin/citys']);
      this.toastr.success(`${this.newCity.name} à été enregistré avec succès`);
    });
 
  }

}
