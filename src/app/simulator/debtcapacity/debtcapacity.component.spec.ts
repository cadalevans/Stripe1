import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtcapacityComponent } from './debtcapacity.component';

describe('DebtcapacityComponent', () => {
  let component: DebtcapacityComponent;
  let fixture: ComponentFixture<DebtcapacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtcapacityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtcapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
