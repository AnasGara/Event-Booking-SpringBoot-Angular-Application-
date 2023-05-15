import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninorganizerComponent } from './signinorganizer.component';

describe('SigninorganizerComponent', () => {
  let component: SigninorganizerComponent;
  let fixture: ComponentFixture<SigninorganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninorganizerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SigninorganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
