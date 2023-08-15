import { TestBed } from '@angular/core/testing';

import { EnvironmentService } from './environment.service';
import { environment } from '../../../environments/environment';

describe('EnvironmentService', () => {
  let service: EnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should receive the correct environment',() => {
    expect(service.apiHost).toBe(environment.apiHost);
    expect(service.production).toBe(environment.production);
  })

});
