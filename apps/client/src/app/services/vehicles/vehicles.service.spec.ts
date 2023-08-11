import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EnvironmentService } from '../environment/environment.service';
import { IEnvironment } from '../../interfaces';
import { VehicleService } from './vehicles.service';


describe('VehicleService', () => {
  let service: VehicleService;

  const mockEnvironment: IEnvironment = {
    apiHost: 'http://test',
    production: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        VehicleService,
        {provide: HttpClientTestingModule, useValue: { get: (endpoint: any) => of()} },
        { provide: EnvironmentService, useValue: mockEnvironment }
      ]
    });
    service = TestBed.inject(VehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should call the HttpClient with the corrent endpoint", () => {
    const getSpy = spyOn(TestBed.inject(HttpClient), "get").and.returnValue(of());
    service.getVehicles();
    expect(getSpy).toHaveBeenCalledWith(`${mockEnvironment.apiHost}/vehicles`)
  });
});
