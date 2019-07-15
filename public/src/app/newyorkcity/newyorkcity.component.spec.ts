import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewyorkcityComponent } from './newyorkcity.component';

describe('NewyorkcityComponent', () => {
  let component: NewyorkcityComponent;
  let fixture: ComponentFixture<NewyorkcityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewyorkcityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewyorkcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
