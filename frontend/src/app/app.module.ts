import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddNotificationItemComponent } from './components/add-notification-item/add-notification-item.component';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ApiComponent } from './components/pages/api/api.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AddNotificationItemComponent,
    NotificationItemComponent,
    NotificationsComponent,
    AboutComponent,
    ApiComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ])
  ],
  
  providers: [AuthService, AuthGuard, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
