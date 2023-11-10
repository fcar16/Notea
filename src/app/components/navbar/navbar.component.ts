import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  themeService: any;
  isDarkTheme = false;

  constructor(public loginS:LoginService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.loginS.signOut();
  }
  toggleTheme(): void {
   
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setDarkTheme(this.isDarkTheme);
  }
}