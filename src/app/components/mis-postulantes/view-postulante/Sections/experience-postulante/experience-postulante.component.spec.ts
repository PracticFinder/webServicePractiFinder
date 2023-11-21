import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencePostulanteComponent } from './experience-postulante.component';

describe('ExperiencePostulanteComponent', () => {
  let component: ExperiencePostulanteComponent;
  let fixture: ComponentFixture<ExperiencePostulanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperiencePostulanteComponent]
    });
    fixture = TestBed.createComponent(ExperiencePostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
