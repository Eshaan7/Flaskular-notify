import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from '../app/components/notifications/notifications.component'
import { AboutComponent } from '../app/components/pages/about/about.component';
import { ApiComponent } from '../app/components/pages/api/api.component';

const routes: Routes = [
  { path: '', component: NotificationsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'api', component: ApiComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
