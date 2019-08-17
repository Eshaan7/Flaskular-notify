import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notification } from '../models/Notification';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer'
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
    const url = `${this.FlaskApiUrl}/${notif.id}/`;
    return this.http.delete<Notification>(url, httpOptions);
  }

  // Add Notification
  addNotification(notif:Notification):Observable<Notification> {
    return this.http.post<Notification>(this.FlaskApiUrl, notif, httpOptions);
  }

  // Edit Notification
  editNotification(notif:Notification):Observable<any> {
    const url = `${this.FlaskApiUrl}/${notif.id}`;
    return this.http.put(url, notif, httpOptions);

  }
}
