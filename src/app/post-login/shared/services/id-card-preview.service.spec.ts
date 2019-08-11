import { TestBed } from '@angular/core/testing';

import { IdCardPreviewService } from './id-card-preview.service';

describe('IdCardPreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdCardPreviewService = TestBed.get(IdCardPreviewService);
    expect(service).toBeTruthy();
  });
});
