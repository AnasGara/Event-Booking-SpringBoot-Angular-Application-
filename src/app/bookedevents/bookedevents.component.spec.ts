import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedeventsComponent } from './bookedevents.component';

describe('BookedeventsComponent', () => {
  let component: BookedeventsComponent;
  let fixture: ComponentFixture<BookedeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedeventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
