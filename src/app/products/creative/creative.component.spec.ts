import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREATIVEComponent } from './creative.component';

describe('CREATIVEComponent', () => {
  let component: CREATIVEComponent;
  let fixture: ComponentFixture<CREATIVEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREATIVEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CREATIVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
