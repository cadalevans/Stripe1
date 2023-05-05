import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInvestComponent } from './form-invest.component';

describe('FormInvestComponent', () => {
  let component: FormInvestComponent;
  let fixture: ComponentFixture<FormInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
