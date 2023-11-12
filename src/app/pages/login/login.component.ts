import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSigninButtonModule, SocialLoginModule } from '@abacritt/angularx-social-login';
import { Theme, ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,SocialLoginModule, GoogleSigninButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {
    this.themeService.currentTheme$.subscribe(theme => {
    this.isDarkTheme = theme === Theme.Dark;
  }); }
  ngOnInit(): void {
  }
  

}