import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { QuestionAnswer } from './models/qa.model';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QaService {

  readonly baseURL = '/api/qa';

  constructor(private http: HttpClient) { }

  getQA() {
    return this.http.get<Array<QuestionAnswer>>('/api/qa')
      .pipe(
        catchError(this.handleError<Array<QuestionAnswer>>('getQA'))
      )
    ;
  }

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {

      console.error(error); // log to console
      window.alert('Server is busy at the moment. Please try again later!');

      // If a native error is caught, do not transform it. We only want to
      // transform response errors that are not wrapped in an `Error`.
      if (error.error instanceof Event) {
        throw error.error;
      }

      const message = `server returned code ${error.status} with body "${error.error}"`;
      throw new Error(`${operation} failed: ${message}`);
    };

  }
}
