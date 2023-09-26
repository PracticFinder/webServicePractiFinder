import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProfileContentComponent } from './table-profile-content.component';

describe('TableProfileContentComponent', () => {
  let component: TableProfileContentComponent;
  let fixture: ComponentFixture<TableProfileContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableProfileContentComponent]
    });
    fixture = TestBed.createComponent(TableProfileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
