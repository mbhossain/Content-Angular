import { TestBed } from '@angular/core/testing';

import { ShowMenuService } from './show-menu.service';

describe('ShowMenuService', () => {
  let service: ShowMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
