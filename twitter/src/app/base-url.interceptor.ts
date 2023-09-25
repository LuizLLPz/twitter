import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor(private configService: ApiService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const baseUrl = this.configService.getBaseUrl();
    const apiReq = request.clone({ url: `${baseUrl}/${request.url}`, setParams: {insecure: 'true'} });
    return next.handle(apiReq);
  }
}
