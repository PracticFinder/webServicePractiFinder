import { TestBed } from '@angular/core/testing';

import { LocalToolbarServiceService } from './local-toolbar-service.service';

describe('LocalToolbarServiceService', () => {
  let service: LocalToolbarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalToolbarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
