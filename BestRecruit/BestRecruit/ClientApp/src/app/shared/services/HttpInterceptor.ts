import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { localStorageService } from './storage.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private storage: localStorageService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Token = this.storage.getStorage("Token") || [];
    if (Token.token != undefined) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${Token.token}`
        }
      })
    }
    return next.handle(request);
  }
}
