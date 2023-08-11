import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { EnvironmentService } from '../environment/environment.service';
import { IColors, IExtra, IMotor, IVehicle } from '../../interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private retrys = 3;

  constructor(private http: HttpClient, private env: EnvironmentService) {}

  getMotors(): Observable<IMotor[]> {
    return this.http.get<IMotor[]>(`${this.env.apiHost}/configs/motors`).pipe(this.commonOperators());
  }

  getExtras(): Observable<IExtra[]> {
    return this.http.get<IExtra[]>(`${this.env.apiHost}/configs/extras`).pipe(this.commonOperators());
  }

  getColors(): Observable<IColors[]> {
    return this.http.get<IColors[]>(`${this.env.apiHost}/configs/colors`).pipe(this.commonOperators());
  }

  getConfigs(): Observable<IExtra> {
    return this.http.get<IExtra>(`${this.env.apiHost}/configs`).pipe(this.commonOperators());
  }

  createConfig(config: IVehicle): Observable<IVehicle> {
    return this.http.post<IVehicle>(`${this.env.apiHost}/configs`, config, httpOptions).pipe(this.commonOperators());
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const err = new Error (`Error: ${error.statusText}, please try again later`)
    return throwError(() => err);
  }
  //TODO: Research ways to get rid of any
  /**
   * collection of rxjs operators
   * @returns rxjs operators in common inside this service
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private commonOperators(): any {
    return retry(this.retrys), catchError((error) => this.handleError(error))
  }
}
