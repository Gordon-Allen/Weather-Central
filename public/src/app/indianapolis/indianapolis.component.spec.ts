import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianapolisComponent } from './indianapolis.component';

describe('IndianapolisComponent', () => {
  let component: IndianapolisComponent;
  let fixture: ComponentFixture<IndianapolisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianapolisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianapolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
