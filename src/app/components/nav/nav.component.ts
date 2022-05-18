import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() themeEmitter : EventEmitter<string> = new EventEmitter<string>();
  faSun = faSun;
  faMoon = faMoon;
  theme: string = 'sun';
  constructor(private ThemeService: ThemeService) { }

  ngOnInit(): void {
  }

  changeTheme(changeTheme: string) :void {
    this.theme = changeTheme;
    this.ThemeService.changeTheme(this.theme);
    this.themeEmitter.emit(this.theme);
  }
}
