import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCompteComponent } from './all-compte.component';

describe('AllCompteComponent', () => {
  let component: AllCompteComponent;
  let fixture: ComponentFixture<AllCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
