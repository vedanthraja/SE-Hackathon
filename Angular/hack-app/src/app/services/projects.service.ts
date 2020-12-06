import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }


  private baseUrl = 'http://127.0.0.1:8000/home';





  createProject(project: Object): Observable<object> {
    return this.http.post(`${this.baseUrl}/`, project);
  }

  updateProject(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getProjectsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }


  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/`);
  }



}
