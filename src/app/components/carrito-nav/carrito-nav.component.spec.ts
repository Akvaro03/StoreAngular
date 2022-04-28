import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoNavComponent } from './carrito-nav.component';

describe('CarritoNavComponent', () => {
  let component: CarritoNavComponent;
  let fixture: ComponentFixture<CarritoNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
