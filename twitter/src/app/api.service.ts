import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000'; // Defina sua URL base aqui

  getBaseUrl(): string {
    return this.baseUrl;
  }
}
