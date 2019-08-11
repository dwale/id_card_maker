import { TestBed } from '@angular/core/testing';

import { PreLoginService } from './pre-login.service';

describe('PreLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreLoginService = TestBed.get(PreLoginService);
    expect(service).toBeTruthy();
  });
});
