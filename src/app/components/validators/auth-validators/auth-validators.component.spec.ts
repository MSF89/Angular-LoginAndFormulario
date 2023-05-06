import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthValidatorsComponent } from './auth-validators.component';

describe('AuthValidatorsComponent', () => {
  let component: AuthValidatorsComponent;
  let fixture: ComponentFixture<AuthValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthValidatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
