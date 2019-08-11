import { TestBed } from '@angular/core/testing';

import { PostLoginService } from './post-login.service';

describe('PostLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostLoginService = TestBed.get(PostLoginService);
    expect(service).toBeTruthy();
  });
});
