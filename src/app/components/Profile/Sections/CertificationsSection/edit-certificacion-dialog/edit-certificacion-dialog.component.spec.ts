import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCertificacionDialogComponent } from './edit-certificacion-dialog.component';

describe('EditCertificacionDialogComponent', () => {
  let component: EditCertificacionDialogComponent;
  let fixture: ComponentFixture<EditCertificacionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCertificacionDialogComponent]
    });
    fixture = TestBed.createComponent(EditCertificacionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
