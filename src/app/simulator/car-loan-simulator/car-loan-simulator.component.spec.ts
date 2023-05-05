import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLoanSimulatorComponent } from './car-loan-simulator.component';

describe('CarLoanSimulatorComponent', () => {
  let component: CarLoanSimulatorComponent;
  let fixture: ComponentFixture<CarLoanSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarLoanSimulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarLoanSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
