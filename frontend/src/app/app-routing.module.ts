import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from '../app/components/notifications/notifications.component'
import { AboutComponent } from '../app/components/pages/about/about.component';


const routes: Routes = [
  { path: '', component: NotificationsComponent },
  { path: 'about', component: AboutComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
