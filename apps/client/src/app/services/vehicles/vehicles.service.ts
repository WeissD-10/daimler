import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { EnvironmentService } from '../environment/environment.service';
import { IBaseVehicle } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private retrys = 3;

  constructor(private http: HttpClient, private env: EnvironmentService) {}

  getVehicles(): Observable<IBaseVehicle[]> {
    return this.http.get<IBaseVehicle[]>(`${this.env.apiHost}/vehicles`).pipe(this.commonOperators());
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
