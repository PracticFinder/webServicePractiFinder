import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioReclutadorComponent } from './inicio-reclutador.component';

describe('InicioReclutadorComponent', () => {
  let component: InicioReclutadorComponent;
  let fixture: ComponentFixture<InicioReclutadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioReclutadorComponent]
    });
    fixture = TestBed.createComponent(InicioReclutadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
