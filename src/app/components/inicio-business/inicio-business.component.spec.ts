import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioBusinessComponent } from './inicio-business.component';

describe('InicioBusinessComponent', () => {
  let component: InicioBusinessComponent;
  let fixture: ComponentFixture<InicioBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioBusinessComponent]
    });
    fixture = TestBed.createComponent(InicioBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
