import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Theme, ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDarkTheme = false;

  constructor(public loginS:LoginService,private themeService: ThemeService) {
    this.themeService.currentTheme$.subscribe(theme => {
    this.isDarkTheme = theme === Theme.Dark;
  }); }

  ngOnInit(): void {
  }

  public logout(){
    this.loginS.signOut();
  }
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}