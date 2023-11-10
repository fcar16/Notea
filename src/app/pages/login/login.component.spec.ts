import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { SocialLoginModule } from '@abacritt/angularx-social-login';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [CommonModule, SocialLoginModule, GoogleSigninButtonModule],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
