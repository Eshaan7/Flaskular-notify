import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/Notification'
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements OnInit {

  notifs:Notification[];
  error: any;

  constructor(private notifService:NotificationService) { }

  ngOnInit() {
    this.notifService.getNotifications().subscribe(
      notifs => {
        this.notifs = notifs;
      }, 
      error => this.error = error);
  }

  deleteNotif(notif:Notification) {
    // Remove from server
    this.notifService.deleteNotification(notif).subscribe(
      notif => {
        // Remove From UI
        this.notifs = this.notifs.filter(n => n.id !== notif.id);
      }, 
      error => {
        const error_obj = {
          "class_category": "danger",
          "class_icon": "exclamation-triangle",
          "message": "You are not allowed to delete the particular notification."
        }
        this.error = error_obj; /* exclamation-triangle, check-circle, info-circle */
      }
    );
  }

  editNotif(notif:Notification) {
    // delete, add, reload ?
    // Remove from server
    this.notifService.editNotification(notif).subscribe(
      notif => {
        this.notifs = this.notifs.filter(n => n.id !== notif.id);
        this.notifs.unshift(notif);
      }, 
      error => {
        const error_obj = {
          "class_category": "danger",
          "class_icon": "exclamation-triangle",
          "message": "You are not allowed to edit the particular notification."
        }
        this.error = error_obj; /* exclamation-triangle, check-circle, info-circle */
      }
    );
  }

  addNotif(notif:Notification) {
    this.notifService.addNotification(notif).subscribe(
      notif => {
        this.notifs.unshift(notif);
      }, 
      error => {
        this.error = error;
        throw error;
      }
    );
  }

}
