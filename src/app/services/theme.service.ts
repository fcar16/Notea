// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme {
  Light = 'light-theme',
  Dark = 'dark-theme'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<Theme>(Theme.Light);
  currentTheme$ = this.currentThemeSubject.asObservable();

  toggleTheme(): void {
    const currentTheme = this.currentThemeSubject.value;
    const newTheme = currentTheme === Theme.Light ? Theme.Dark : Theme.Light;
    this.setTheme(newTheme);
  }

  setTheme(theme: Theme): void {
    document.body.classList.remove(Theme.Light, Theme.Dark);
    document.body.classList.add(theme);
    this.currentThemeSubject.next(theme);
  }
}
