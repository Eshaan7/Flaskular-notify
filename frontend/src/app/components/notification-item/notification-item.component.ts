import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notification } from '../../models/Notification'
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.css']
})


export class NotificationItemComponent implements OnInit {
  @Input() notif: Notification;
  @Output() editNotif: EventEmitter<any> = new EventEmitter();
  @Output() deleteNotif: EventEmitter<Notification> = new EventEmitter();

  constructor(private notifService:NotificationService) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  /*
  setClasses() {
    let classes = {
      "notif-class": true
    }

    return classes;
  }

  */

  title:string;
  body:string;

  onEdit(notif) {
    const notif_modified = {
      id: notif.id,
      title: this.title,
      body: this.body
    }
    // Edit on server; emit upwards
    this.editNotif.emit(notif_modified);
  }

  onDelete(notif) {
    // Delete on server; emit upwards
    this.deleteNotif.emit(notif);
  }

}
