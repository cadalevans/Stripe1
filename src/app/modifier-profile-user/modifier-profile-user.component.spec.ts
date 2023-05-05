import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProfileUserComponent } from './modifier-profile-user.component';

describe('ModifierProfileUserComponent', () => {
  let component: ModifierProfileUserComponent;
  let fixture: ComponentFixture<ModifierProfileUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierProfileUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierProfileUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
