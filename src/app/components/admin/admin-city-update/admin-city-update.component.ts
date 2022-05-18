import { Component, OnInit } from '@angular/core';
import { Citys } from 'src/app/models/citys';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CitysService } from 'src/app/services/citys.service';
@Component({
  selector: 'app-admin-city-update',
  templateUrl: './admin-city-update.component.html',
  styleUrls: ['./admin-city-update.component.css']
})
export class AdminCityUpdateComponent implements OnInit {

  updateCity !: Citys;
  types = ['ville', 'lieu'];
  id !: number;

  constructor(private router : Router, private toastr: ToastrService, private CitysService : CitysService, private ActivatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(<string>this.ActivatedRoute.snapshot.paramMap.get('id'))
    this.updateCity = this.CitysService.findById(this.id);
  }

  updatePLace(){
    this.router.navigate(['/admin/citys']);
    this.toastr.success(`${this.updateCity.name} à été modifié avec succès`);
  }

}
