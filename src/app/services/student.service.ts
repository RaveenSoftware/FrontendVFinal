import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    private apiUrl = 'http://localhost:8080/api/v1/estudiantes';


  constructor(private http: HttpClient) {}

  list(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  get(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(student: Student): Observable<Student> {
  return this.http.post<Student>(this.apiUrl, student).pipe(
    catchError(this.handleError)
  );
  }

  getRoles(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8080/api/v1/roles');
}

  update(id: number, student: Student): Observable<Student> {
  return this.http.put<Student>(`${this.apiUrl}/${id}`, student).pipe(
    catchError(this.handleError)
  );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Backend error
      if (error.status === 400 && error.error?.message) {
        errorMessage = error.error.message;
      } else if (error.status === 404) {
        errorMessage = 'Estudiante no encontrado';
      } else {
        errorMessage = 'Error en el servidor';
      }
    }

    console.error('Error:', error);
    return throwError(() => new Error(errorMessage));
  }
}