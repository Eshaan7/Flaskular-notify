import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  // Get Notifications
  getNotifications():Observable<Notification[]> {
    const url = `${this.FlaskApiUrl}/notifications/`;
    return this.http.get<Notification[]>(url, httpOptions);
  }

  // Delete Notification
  deleteNotification(notif:Notification):Observable<Notification> {
    const url = `${this.FlaskApiUrl}/notifications/${notif.id}`;
    return this.http.delete<Notification>(url, httpOptions);
  }

  // Add Notification
  addNotification(notif:Notification):Observable<Notification> {
    const url = `${this.FlaskApiUrl}/notifications/`;
    return this.http.post<Notification>(url, notif, httpOptions);
  }

  // Edit Notification
  editNotification(notif:Notification):Observable<any> {
    const url = `${this.FlaskApiUrl}/notifications/${notif.id}`;
    return this.http.put(url, notif, httpOptions);

  }
}
