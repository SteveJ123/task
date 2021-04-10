import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentfiveComponent } from './componentfive.component';

describe('ComponentfiveComponent', () => {
  let component: ComponentfiveComponent;
  let fixture: ComponentFixture<ComponentfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentfiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
