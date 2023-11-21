import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPostulantesComponent } from './mis-postulantes.component';

describe('MisPostulantesComponent', () => {
  let component: MisPostulantesComponent;
  let fixture: ComponentFixture<MisPostulantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisPostulantesComponent]
    });
    fixture = TestBed.createComponent(MisPostulantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
