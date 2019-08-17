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

  constructor(private notifService:NotificationService) { }

  ngOnInit() {
    this.notifService.getNotifications().subscribe(notifs => {
      this.notifs = notifs;
    });
  }

  deleteNotif(notif:Notification) {
    // Remove From UI
    this.notifs = this.notifs.filter(n => n.id !== notif.id);
    // Remove from server
    this.notifService.deleteNotification(notif).subscribe();
  }

  editNotif(notif:Notification) {
    // delete, add, reload ?
    this.notifs = this.notifs.filter(n => n.id !== notif.id);
    // Remove from server
    this.notifService.editNotification(notif).subscribe();

  }

  addNotif(notif:Notification) {
    this.notifService.addNotification(notif).subscribe(notif => {
      this.notifs.push(notif);
    });
  }

}
