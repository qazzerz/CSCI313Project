import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCardComponentComponent } from './pizza-card-component.component';

describe('PizzaCardComponentComponent', () => {
  let component: PizzaCardComponentComponent;
  let fixture: ComponentFixture<PizzaCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
