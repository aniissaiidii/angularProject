import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AuthComponent } from './auth-user.component'; 

describe('AuthUserComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
