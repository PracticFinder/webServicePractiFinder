import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationPostulanteComponent } from './certification-postulante.component';

describe('CertificationPostulanteComponent', () => {
  let component: CertificationPostulanteComponent;
  let fixture: ComponentFixture<CertificationPostulanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationPostulanteComponent]
    });
    fixture = TestBed.createComponent(CertificationPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
