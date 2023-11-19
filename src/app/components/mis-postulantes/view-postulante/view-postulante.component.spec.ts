import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostulanteComponent } from './view-postulante.component';

describe('ViewPostulanteComponent', () => {
  let component: ViewPostulanteComponent;
  let fixture: ComponentFixture<ViewPostulanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPostulanteComponent]
    });
    fixture = TestBed.createComponent(ViewPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
