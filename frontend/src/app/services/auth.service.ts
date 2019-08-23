import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { User } from '../models/User';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

/*
const toPromise = obs =>
  new Promise((resolve, reject) => {
    obs.subscribe({
      complete: resolve,
      error: reject
    });
  });

*/

@Injectable({
  providedIn: 'root'
})


@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:5000/api/v1';

  constructor(private http:HttpClient, private _router: Router) {}

  login(user: User): Observable<any> {
    let url: string = `${this.BASE_URL}/login/`;
    return this.http.post(url, user, httpOptions); //.toPromise();
  }

  register(user: User): Observable<any> {
    let url: string = `${this.BASE_URL}/register/`;
    return this.http.post(url, user, httpOptions); //.toPromise();
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');    
  }
  
}
