import { TestBed } from '@angular/core/testing';

import { AdminServcisService } from './admin-servcis.service';

describe('AdminServcisService', () => {
  let service: AdminServcisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServcisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
