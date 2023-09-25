import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public loginServece(email: string, password: string): Observable<any> {
    console.log(email, password);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');

    let params = new HttpParams();
    params = params.append('email', email);
    params = params.append('password', password);

    return this.http.get('http://localhost:3000/login/', {
      headers: headers,
      params: params,
    });
  }
}
