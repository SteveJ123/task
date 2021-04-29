import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuseComponent } from './formuse.component';

describe('FormuseComponent', () => {
  let component: FormuseComponent;
  let fixture: ComponentFixture<FormuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
