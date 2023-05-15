import { Component, OnInit } from '@angular/core';
import { Event } from '../Models/Event.model';
import { ActivatedRoute, Router } from '@angular/router';
import { APIsService } from '../Services/apis.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../Models/User.model';

@Component({
  selector: 'app-bookingconfirmed',
  templateUrl: './bookingconfirmed.component.html',
  styleUrls: ['./bookingconfirmed.component.css']
})



export class BookingconfirmedComponent implements OnInit {
  event = new Event()
  id: number = 0
  helper = new JwtHelperService
  user = new User()
  token: any
  constructor(
    private router: Router,
    private rout: ActivatedRoute,
    private service: APIsService
  ) { }




  ngOnInit(): void {
    this.token = localStorage.getItem("token")
    if (this.token != null) {
      let decodeToken = this.helper.decodeToken(this.token)
      this.user = decodeToken.data
      console.log(this.user)
    }
    this.id = this.rout.snapshot.params["id"]
    this.service.getEventById(this.id).subscribe(res => {
      this.event = res
      console.log(this.event)
    })
  }

}
