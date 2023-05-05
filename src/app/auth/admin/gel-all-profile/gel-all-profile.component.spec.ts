import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelAllProfileComponent } from './gel-all-profile.component';

describe('GelAllProfileComponent', () => {
  let component: GelAllProfileComponent;
  let fixture: ComponentFixture<GelAllProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GelAllProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GelAllProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
