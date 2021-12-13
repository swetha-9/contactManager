import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: 'Zoho-oauthtoken 1000.e498687cb67f4bb6104870ccb5a2eb05.aa84c5dab5c5b876f6169e63f4549298',
        'X-com-zoho-invoice-organizationid': '766983033',
        "Content-Type" : "application/x-www-form-urlencoded;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "*", 
      }
    });
  return next.handle(request);
  }
}
