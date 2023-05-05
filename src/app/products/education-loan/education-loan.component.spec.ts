import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationLoanComponent } from './education-loan.component';

describe('EducationLoanComponent', () => {
  let component: EducationLoanComponent;
  let fixture: ComponentFixture<EducationLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
