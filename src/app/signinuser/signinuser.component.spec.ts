import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninuserComponent } from './signinuser.component';

describe('SigninuserComponent', () => {
  let component: SigninuserComponent;
  let fixture: ComponentFixture<SigninuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
