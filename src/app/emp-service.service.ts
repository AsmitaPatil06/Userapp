import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpServiceService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  empGet(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }
  GetEmpId(id): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/:${id}`);
  }
  addEmp(list) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', list);
  }
  editEmp(id) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id);
  }
  deleteEmp(id) {
    return this.http.delete(this.url + '/' + id);
    //return this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
