import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  URL = "http://localhost:3000/";

  constructor(
    private http: HttpClient,
  ) { }

  postRegister(form: any): Observable<any>{
    console.log("sass")
    const url = this.URL+"profile"
    return this.http.post<any>(url, form.value)
  }
}
