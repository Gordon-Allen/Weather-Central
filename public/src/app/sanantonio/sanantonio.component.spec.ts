import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanantonioComponent } from './sanantonio.component';

describe('SanantonioComponent', () => {
  let component: SanantonioComponent;
  let fixture: ComponentFixture<SanantonioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanantonioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanantonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
