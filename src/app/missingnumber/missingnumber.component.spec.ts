import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingnumberComponent } from './missingnumber.component';

describe('MissingnumberComponent', () => {
  let component: MissingnumberComponent;
  let fixture: ComponentFixture<MissingnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingnumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
