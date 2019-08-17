import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-notification-item',
  templateUrl: './add-notification-item.component.html',
  styleUrls: ['./add-notification-item.component.css']
})
export class AddNotificationItemComponent implements OnInit {

  @Output() addNotif: EventEmitter<any> = new EventEmitter();

  title:string;
  body:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const notif = {
      title: this.title,
      body: this.body
    }

    // Add on server; emit upwards
    this.addNotif.emit(notif);
  }

}
