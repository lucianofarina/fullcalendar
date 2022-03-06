import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { PjnGuideCourstListComponent } from './component/pjn/guide/courts/pjn-guide-courst-list/pjn-guide-courst-list.component'; // a plugin!

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guide', component: PjnGuideCourstListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
