import { TestBed } from '@angular/core/testing';

import { ContactmanagerService } from './contactmanager.service';

describe('ContactmanagerService', () => {
  let service: ContactmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
