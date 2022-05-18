import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Heroes } from 'src/app/models/heroes';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  @Input() heroe!: Heroes;
  @Input() theme !: string;
  @Output() nameEmitter: EventEmitter<Heroes> = new EventEmitter<Heroes>();
  
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  showItems(heroe: Heroes): void{
    this.nameEmitter.emit(heroe);

    if(heroe.name === 'Athkor'){
      this.toastr.info('Les objets d\'' + heroe.name + ' ont été chargé!', '', {
      positionClass: 'toast-bottom-right',
      });
    }else{
      this.toastr.info('Les objets de ' + heroe.name + ' ont été chargé!', '', {
        positionClass: 'toast-bottom-right',
        });
    }
  }
}