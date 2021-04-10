import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentxComponent } from './componentx.component';

describe('ComponentxComponent', () => {
  let component: ComponentxComponent;
  let fixture: ComponentFixture<ComponentxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
