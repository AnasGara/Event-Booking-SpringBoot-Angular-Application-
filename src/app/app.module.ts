import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { CreateeventComponent } from './createevent/createevent.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { BookingconfirmedComponent } from './bookingconfirmed/bookingconfirmed.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { YoureventsComponent } from './yourevents/yourevents.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale } from 'ngx-bootstrap/locale';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';
import { SigninorganizerComponent } from './signinorganizer/signinorganizer.component';
import { SigninuserComponent } from './signinuser/signinuser.component';
import { SignuporganizerComponent } from './signuporganizer/signuporganizer.component';
import { SignupuserComponent } from './signupuser/signupuser.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookedeventsComponent } from './bookedevents/bookedevents.component';

defineLocale('en-gb', enGbLocale);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    EventsComponent,
    CreateeventComponent,
    EventdetailComponent,
    ContactComponent,
    BookingComponent,
    BookingconfirmedComponent,
    InvoiceComponent,
    NotfoundComponent,
    YoureventsComponent,
    SigninorganizerComponent,
    SigninuserComponent,
    SignuporganizerComponent,
    SignupuserComponent,
    SigninComponent,
    SignupComponent,
    AboutusComponent,
    BookedeventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    NoopAnimationsModule,
    NgToastModule,
    HttpClientModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
