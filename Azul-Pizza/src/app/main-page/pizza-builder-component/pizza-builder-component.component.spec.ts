import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaBuilderComponentComponent } from './pizza-builder-component.component';

describe('PizzaBuilderComponentComponent', () => {
  let component: PizzaBuilderComponentComponent;
  let fixture: ComponentFixture<PizzaBuilderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaBuilderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaBuilderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
