import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormclientInvestComponent } from './formclient-invest.component';

describe('FormclientInvestComponent', () => {
  let component: FormclientInvestComponent;
  let fixture: ComponentFixture<FormclientInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormclientInvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormclientInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
