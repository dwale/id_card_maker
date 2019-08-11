import { TestBed, async, inject } from '@angular/core/testing';

import { VerifiedGuardGuard } from './verified-guard.guard';

describe('VerifiedGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifiedGuardGuard]
    });
  });

  it('should ...', inject([VerifiedGuardGuard], (guard: VerifiedGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
