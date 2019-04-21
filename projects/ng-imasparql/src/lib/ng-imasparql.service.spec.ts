import { TestBed } from '@angular/core/testing';

import { NgImasparqlService } from './ng-imasparql.service';

describe('NgImasparqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgImasparqlService = TestBed.get(NgImasparqlService);
    expect(service).toBeTruthy();
  });
});
