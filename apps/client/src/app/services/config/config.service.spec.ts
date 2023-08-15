import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EnvironmentService } from '../environment/environment.service';
import { ConfigService } from './config.service';
import { IEnvironment } from '../../interfaces';

describe('ConfigService', () => {
  let service: ConfigService;
  let httpMock: HttpTestingController; // Neu hinzugefügt

  const mockEnvironment: IEnvironment = {
    apiHost: 'http://test',
    production: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ConfigService,
        { provide: EnvironmentService, useValue: mockEnvironment }
      ]
    });
    service = TestBed.inject(ConfigService);
    httpMock = TestBed.inject(HttpTestingController); // Neu hinzugefügt
  });

  afterEach(() => {
    httpMock.verify(); // Überprüft, ob alle erwarteten Anfragen abgeschlossen wurden
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should call the HttpClient with the correct endpoint", () => {
    const colorsResponse = {};

    service.getColors().subscribe(response => {
      expect(response).toEqual(colorsResponse);
    });

    const req = httpMock.expectOne(`${mockEnvironment.apiHost}/config/colors`);
    expect(req.request.method).toBe('GET');

    req.flush(colorsResponse);
  });
});
