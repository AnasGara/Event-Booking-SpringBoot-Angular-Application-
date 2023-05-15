import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../Models/User.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { APIsService } from '../Services/apis.service';
import { Event } from '../Models/Event.model';
import { EventUser } from '../Models/EventUser.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  cardnumber?: string
  cvv?: string
  date?: string
  user = new User()
  token: any
  helper = new JwtHelperService()
  role: string = ""
  event = new Event()
  idevent: number = 0
  eventUser = new EventUser()
  applydate = new Date()
  checkEventUser = new EventUser()
  @ViewChild('myForm') myForm?: NgForm;

  constructor(
    private toast: NgToastService,
    private router: Router,
    private rout: ActivatedRoute,
    private service: APIsService

  ) { }


  book() {
    if (this.myForm?.valid) {
      this.service.findEventUserIdAndUserId(this.idevent, this.user.id!).subscribe(res => {
        if (res != null) {
          this.toast.warning({
            detail: "You have already booked this event"
          })
          this.router.navigate(["/bookedevents"])
        }
        else {
          this.eventUser.event = this.event;
          this.eventUser.user = this.user
          this.eventUser.date = this.applydate.toISOString().slice(0, 10)
          this.service.addeventuser(this.eventUser).subscribe(res => {
            console.log(this.eventUser)
          })
          this.router.navigate(["/bookingconfirmed", this.idevent])
        }
      })

    }
    else {
      this.toast.info({
        detail: "Please fill in all required fields"
      })
    }
  }

  ngOnInit(): void {
    this.token = localStorage.getItem("token")
    if (this.token != null) {
      let decodeToken = this.helper.decodeToken(this.token)
      this.user = decodeToken.data
      this.role = decodeToken.role
      if (this.role == "organizer") {
        this.toast.warning({
          detail: "You cannot access this page"
        })
        this.router.navigate(["/home"])
      }
    }
    else {
      this.toast.warning({
        detail: "You have to sign to access this page"
      })
      this.router.navigate(["/signinuser"])
    }
    this.idevent = this.rout.snapshot.params["id"];
    this.service.getEventById(this.idevent).subscribe(res => {
      this.event = res;
      console.log(this.event)
    })

  }

}
