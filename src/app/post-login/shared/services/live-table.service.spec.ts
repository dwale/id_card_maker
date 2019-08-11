import { TestBed } from '@angular/core/testing';

import { LiveTableService } from './live-table.service';

describe('LiveTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveTableService = TestBed.get(LiveTableService);
    expect(service).toBeTruthy();
  });
});
