import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor {

  constructor(private user:UsersService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let reqclone = req.clone({
      setHeaders:{
        Authorization: 'Bearer '+localStorage.getItem('Token')
      }
    })
    return next.handle(reqclone)
  }
}
