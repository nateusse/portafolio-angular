import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'portafolio';
  darkMode = false;
  constructor(){
    this.detectColorScheme();
  }
  detectColorScheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme:light)").matches){
      this.darkMode = true;
      document.documentElement.setAttribute('data-theme', this.darkMode ? "dark" : " light");
    }
  }

  toggleTheme(){
    this.darkMode = !this.darkMode;
    document.documentElement.setAttribute("data-theme", this.darkMode ? "dark" : "light")
  }
}


