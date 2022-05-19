import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Citys } from 'src/app/models/citys';
import { CitysService } from 'src/app/services/citys.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  citys !: Citys[];
  faTrash = faTrashCan;
  faPen = faPenToSquare;
  constructor(private CitysService : CitysService) { }

  ngOnInit(): void {
    this.CitysService.findAllCitys().subscribe(data => {
      this.citys = data;
    })
  }

  deletecity(id ?: number){
    this.CitysService.deleteCity(id).subscribe(data => {
      this.ngOnInit();
    });
  }
}
