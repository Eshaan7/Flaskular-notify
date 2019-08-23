import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from '../app/components/notifications/notifications.component'
import { AboutComponent } from '../app/components/pages/about/about.component';
import { ApiComponent } from '../app/components/pages/api/api.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'

const routes: Routes = [
  { path: '', component: NotificationsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'api', component: ApiComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
