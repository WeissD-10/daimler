import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EnvironmentService } from '../environment/environment.service';
import { ConfigService } from './config.service';
import { IEnvironment } from '../../interfaces';


describe('ConfigService', () => {
  let service: ConfigService;

  const mockEnvironment: IEnvironment = {
    apiHost: 'http://test',
    production: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ConfigService,
        {provide: HttpClientTestingModule, useValue: { get: (endpoint: any) => of()} },
        { provide: EnvironmentService, useValue: mockEnvironment }
      ]
    });
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should call the HttpClient with the corrent endpoint", () => {
    const getSpy = spyOn(TestBed.inject(HttpClient), "get").and.returnValue(of());
    service.getColors();
    expect(getSpy).toHaveBeenCalledWith(`${mockEnvironment.apiHost}/config/colors`)
  });
});
