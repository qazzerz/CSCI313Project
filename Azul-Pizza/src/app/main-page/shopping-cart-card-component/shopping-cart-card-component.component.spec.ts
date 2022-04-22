import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartCardComponentComponent } from './shopping-cart-card-component.component';

describe('ShoppingCartCardComponentComponent', () => {
  let component: ShoppingCartCardComponentComponent;
  let fixture: ComponentFixture<ShoppingCartCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
