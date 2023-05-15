import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupuserComponent } from './signupuser.component';

describe('SignupuserComponent', () => {
  let component: SignupuserComponent;
  let fixture: ComponentFixture<SignupuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
