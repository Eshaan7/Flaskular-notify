import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNotificationItemComponent } from './components/add-notification-item/add-notification-item.component';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ApiComponent } from './components/pages/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNotificationItemComponent,
    NotificationItemComponent,
    NotificationsComponent,
    AboutComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
