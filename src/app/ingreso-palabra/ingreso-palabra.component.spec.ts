import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoPalabraComponent } from './ingreso-palabra.component';

describe('IngresoPalabraComponent', () => {
  let component: IngresoPalabraComponent;
  let fixture: ComponentFixture<IngresoPalabraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoPalabraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoPalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
