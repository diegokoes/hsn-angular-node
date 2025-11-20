import { TestBed } from '@angular/core/testing';

import { FetchNode } from './fetch-node';

describe('FetchNode', () => {
  let service: FetchNode;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchNode);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
