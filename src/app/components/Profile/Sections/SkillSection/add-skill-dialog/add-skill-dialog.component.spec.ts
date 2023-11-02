import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillDialogComponent } from './add-skill-dialog.component';

describe('AddSkillDialogComponent', () => {
  let component: AddSkillDialogComponent;
  let fixture: ComponentFixture<AddSkillDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSkillDialogComponent]
    });
    fixture = TestBed.createComponent(AddSkillDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
