import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Notification } from '../models/Notification';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjU4NzYxNTcsIm5iZiI6MTU2NTg3NjE1NywianRpIjoiMDQ2ZjYyMWMtMDQxYi00NWI0LThkZWEtNGFhZGJkN2I2NGIwIiwiZXhwIjoxNTk3NDEyMTU3LCJpZGVudGl0eSI6MTQsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.XVlS4NWXHuXGaqC9WLwL7lMuV5_iQwhssb4W-BaHiOc'
  })
}

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  
  FlaskApiUrl:string = 'http://localhost:5000/api/v1';

  constructor(private http:HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      `${error.status}, ${error.statusText}`);
  };

  // Get Notifications
  getNotifications():Observable<Notification[]> {
    const url = `${this.FlaskApiUrl}/notifications/`;
    return this.http.get<Notification[]>(url, httpOptions)
                    .pipe(
                      catchError(this.handleError)
                    );
  }

  // Delete Notification
  deleteNotification(notif:Notification):Observable<Notification> {
    const url = `${this.FlaskApiUrl}/notifications/${notif.id}`;
    return this.http.delete<Notification>(url, httpOptions)
                    .pipe(
                      catchError(this.handleError)
                    );
  }

  // Add Notification
  addNotification(notif:Notification):Observable<Notification> {
    const url = `${this.FlaskApiUrl}/notifications/`;
    return this.http.post<Notification>(url, notif, httpOptions)
                    .pipe(
                      catchError(this.handleError)
                    );
  }

  // Edit Notification
  editNotification(notif:Notification):Observable<any> {
    const url = `${this.FlaskApiUrl}/notifications/${notif.id}`;
    return this.http.put<any>(url, notif, httpOptions)
                    .pipe(
                      catchError(this.handleError)
                    );
  }
}
