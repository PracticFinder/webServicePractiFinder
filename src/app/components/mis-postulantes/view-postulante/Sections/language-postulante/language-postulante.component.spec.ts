import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePostulanteComponent } from './language-postulante.component';

describe('LanguagePostulanteComponent', () => {
  let component: LanguagePostulanteComponent;
  let fixture: ComponentFixture<LanguagePostulanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguagePostulanteComponent]
    });
    fixture = TestBed.createComponent(LanguagePostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
