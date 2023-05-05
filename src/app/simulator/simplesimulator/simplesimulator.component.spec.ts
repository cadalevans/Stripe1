import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplesimulatorComponent } from './simplesimulator.component';

describe('SimplesimulatorComponent', () => {
  let component: SimplesimulatorComponent;
  let fixture: ComponentFixture<SimplesimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplesimulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplesimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
