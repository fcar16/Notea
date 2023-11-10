import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';

const USER_KEY = 'social_user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  checked = false;
  user!: SocialUser;
  loggedIn!: boolean;
  originalPath!: string;

  constructor(private authService: SocialAuthService, private router: Router) {
    // Intenta cargar el usuario desde la sessionStorage al inicio
    const storedUser = sessionStorage.getItem(USER_KEY);
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.loggedIn = true;
    }

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = !!user;

      if (this.loggedIn) {
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        if (this.originalPath) {
          this.router.navigate([this.originalPath]);
          this.originalPath = '';
        } else {
          this.router.navigate(['']);
        }
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  isAuth(): boolean {
    return this.loggedIn;
  }

  async refreshToken(): Promise<void> {
    return this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  async signOut(): Promise<void> {
    sessionStorage.removeItem(USER_KEY);
    return await this.authService.signOut();
  }
}
