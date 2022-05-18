import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Heroes } from 'src/app/models/heroes';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-admin-new-heroe',
  templateUrl: './admin-new-heroe.component.html',
  styleUrls: ['./admin-new-heroe.component.css']
})
export class AdminNewHeroeComponent implements OnInit {
  newHeroe = new Heroes();

  constructor(private router : Router, private toastr: ToastrService, private HeroesService : HeroesService) { }


  ngOnInit(): void {
  }

  addHeroe() {
    this.HeroesService.addHeroe(this.newHeroe);
    this.router.navigate(['/admin/heroes']);
    this.toastr.success(`${this.newHeroe.name} à été enregistré avec succès`);
  }
}
