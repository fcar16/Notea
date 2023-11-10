import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDarkTheme: any;
  themeService: any;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    // Intenta cargar el usuario al inicio
    this.loginService.checked = true;
    this.loginService.isAuth();
  }
  toggleTheme(): void {
    // Agrega tu lógica para cambiar el tema aquí
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setDarkTheme(this.isDarkTheme);
  
    // Aplica la clase directamente al body
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
}
}
