import { Component } from '@angular/core';
import { Heroes } from './models/heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTheme!: string;
  
  theme(currentTheme: string) :void {
    this.newTheme = currentTheme;
  }
}
