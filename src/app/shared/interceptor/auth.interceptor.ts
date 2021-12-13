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
    // request = request.clone({
    //   setHeaders: {
    //     Authorization: 'Zoho-oauthtoken 1000.676704b63358763cc4e26c96357aaea9.3f4c6a7745f6492cbd30429d686dd04a',
    //     'X-com-zoho-invoice-organizationid': '766983033',
    //     "Content-Type" : "application/x-www-form-urlencoded;charset=UTF-8",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": "true",
    //     "Access-Control-Allow-Headers": "X-com-zoho-invoice-organizationid", 
    //   }
    // });
  return next.handle(request);
  }
}
