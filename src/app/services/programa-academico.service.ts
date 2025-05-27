import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgramaAcademico } from '../models/programa-academico.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramaAcademicoService {
  private apiUrl = 'http://localhost:8080/api/v1/programas';

  constructor(private http: HttpClient) {}

  // Obtener todos los programas académicos desde el backend
  list(): Observable<ProgramaAcademico[]> {
    return this.http.get<ProgramaAcademico[]>(this.apiUrl);
  }

  // Obtener un programa por ID
  get(id: number): Observable<ProgramaAcademico> {
    return this.http.get<ProgramaAcademico>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo programa
  create(programa: ProgramaAcademico): Observable<ProgramaAcademico> {
    return this.http.post<ProgramaAcademico>(this.apiUrl, programa);
  }

  // Actualizar un programa existente
  update(id: number, programa: ProgramaAcademico): Observable<ProgramaAcademico> {
    return this.http.put<ProgramaAcademico>(`${this.apiUrl}/${id}`, programa);
  }

  // Eliminar un programa por ID
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
