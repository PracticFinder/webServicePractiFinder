import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesInfoComponent } from './languages-info.component';

describe('LanguagesInfoComponent', () => {
  let component: LanguagesInfoComponent;
  let fixture: ComponentFixture<LanguagesInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguagesInfoComponent]
    });
    fixture = TestBed.createComponent(LanguagesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
