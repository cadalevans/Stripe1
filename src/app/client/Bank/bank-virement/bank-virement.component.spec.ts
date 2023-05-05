import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankVirementComponent } from './bank-virement.component';

describe('BankVirementComponent', () => {
  let component: BankVirementComponent;
  let fixture: ComponentFixture<BankVirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankVirementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankVirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
