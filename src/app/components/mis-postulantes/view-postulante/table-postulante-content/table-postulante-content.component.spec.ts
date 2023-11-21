import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePostulanteContentComponent } from './table-postulante-content.component';

describe('TablePostulanteContentComponent', () => {
  let component: TablePostulanteContentComponent;
  let fixture: ComponentFixture<TablePostulanteContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePostulanteContentComponent]
    });
    fixture = TestBed.createComponent(TablePostulanteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
