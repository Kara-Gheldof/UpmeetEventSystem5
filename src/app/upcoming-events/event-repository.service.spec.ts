import { TestBed } from '@angular/core/testing';

import { RepositoryService } from './event-repository.service';

describe('EventRepositoryService', () => {
  let service: RepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
