import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPostulanteComponent } from './skill-postulante.component';

describe('SkillPostulanteComponent', () => {
  let component: SkillPostulanteComponent;
  let fixture: ComponentFixture<SkillPostulanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillPostulanteComponent]
    });
    fixture = TestBed.createComponent(SkillPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
