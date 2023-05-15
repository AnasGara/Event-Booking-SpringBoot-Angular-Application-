import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { CreateeventComponent } from './createevent/createevent.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { BookingconfirmedComponent } from './bookingconfirmed/bookingconfirmed.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { YoureventsComponent } from './yourevents/yourevents.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SigninorganizerComponent } from './signinorganizer/signinorganizer.component';
import { SigninuserComponent } from './signinuser/signinuser.component';
import { SignuporganizerComponent } from './signuporganizer/signuporganizer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignupuserComponent } from './signupuser/signupuser.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './Services/auth.guard';
import { BookedeventsComponent } from './bookedevents/bookedevents.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'events', component: EventsComponent },
  { path: 'createevent', component: CreateeventComponent, canActivate: [AuthGuard] },
  { path: 'eventdetail/:id', component: EventdetailComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'booking/:id', component: BookingComponent, canActivate: [AuthGuard] },
  { path: 'bookingconfirmed/:id', component: BookingconfirmedComponent, canActivate: [AuthGuard] },
  { path: 'yourevents', component: YoureventsComponent, canActivate: [AuthGuard] },
  { path: 'bookedevents', component: BookedeventsComponent, canActivate: [AuthGuard] },
  { path: 'invoice/:id', component: InvoiceComponent, canActivate: [AuthGuard] },
  { path: 'signinorganizer', component: SigninorganizerComponent },
  { path: 'signinuser', component: SigninuserComponent },
  { path: 'signupuser', component: SignupuserComponent },
  { path: 'signuporganizer', component: SignuporganizerComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
