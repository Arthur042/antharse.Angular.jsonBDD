import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Heroes } from 'src/app/models/heroes';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-admin-heroe-update',
  templateUrl: './admin-heroe-update.component.html',
  styleUrls: ['./admin-heroe-update.component.css']
})
export class AdminHeroeUpdateComponent implements OnInit {

  updateHeroe !: Heroes;
  id !: number;

  constructor(private router : Router, private toastr: ToastrService, private HeroesService : HeroesService, private ActivatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(<string>this.ActivatedRoute.snapshot.paramMap.get('id'));
    this.HeroesService.findById(this.id).subscribe(data => {
      this.updateHeroe = data;
    });
  }

  update(){
    this.HeroesService.updateheroe(this.updateHeroe).subscribe(data => {
      this.router.navigate(['/admin/heroes']);
      this.toastr.success(`${this.updateHeroe.name} à été modifié avec succès`);
    })
  }

}
