import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePostulanteComponent } from './profile-postulante.component';

describe('ProfilePostulanteComponent', () => {
  let component: ProfilePostulanteComponent;
  let fixture: ComponentFixture<ProfilePostulanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePostulanteComponent]
    });
    fixture = TestBed.createComponent(ProfilePostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
