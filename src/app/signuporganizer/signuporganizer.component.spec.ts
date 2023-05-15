import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuporganizerComponent } from './signuporganizer.component';

describe('SignuporganizerComponent', () => {
  let component: SignuporganizerComponent;
  let fixture: ComponentFixture<SignuporganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignuporganizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignuporganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
