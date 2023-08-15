import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EnvironmentService } from '../environment/environment.service';
import { IEnvironment } from '../../interfaces';
import { VehicleService } from './vehicles.service';

describe('VehicleService', () => {
  let service: VehicleService;
  let httpMock: HttpTestingController;

  const mockEnvironment: IEnvironment = {
    apiHost: 'http://test',
    production: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        VehicleService,
        { provide: EnvironmentService, useValue: mockEnvironment }
      ]
    });
    service = TestBed.inject(VehicleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should call the HttpClient with the correct endpoint", () => {
    const vehiclesResponse = {}; // Hier könntest du die erwartete Antwort definieren

    service.getVehicles().subscribe(response => {
      expect(response).toEqual(vehiclesResponse);
    });

    const req = httpMock.expectOne(`${mockEnvironment.apiHost}/vehicles`);
    expect(req.request.method).toBe('GET');

    req.flush(vehiclesResponse);
  });
});
