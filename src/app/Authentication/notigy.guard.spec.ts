import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { notigyGuard } from './notigy.guard';

describe('notigyGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notigyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
