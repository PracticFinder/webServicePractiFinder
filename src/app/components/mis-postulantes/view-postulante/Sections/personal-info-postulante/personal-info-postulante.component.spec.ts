import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoPostulanteComponent } from './personal-info-postulante.component';

describe('PersonalInfoPostulanteComponent', () => {
  let component: PersonalInfoPostulanteComponent;
  let fixture: ComponentFixture<PersonalInfoPostulanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInfoPostulanteComponent]
    });
    fixture = TestBed.createComponent(PersonalInfoPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
