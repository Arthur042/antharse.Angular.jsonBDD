import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  theme = 'sun';

  changeTheme(newtheme: string):void {
    this.theme = newtheme;
    console.log(this.theme);
    
  }

  applyTheme():string {
    return this.theme;
  }
}
