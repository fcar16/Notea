import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Theme } from './services/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDarkTheme = false;
  themeService: any;
  constructor(private loginService: LoginService,) {}

  ngOnInit(): void {
    // Intenta cargar el usuario al inicio
    this.loginService.checked = true;
    this.loginService.isAuth();
    this.themeService.theme$.subscribe((theme: Theme) => {
      this.isDarkTheme = theme === Theme.Dark;
    });
  }
}

