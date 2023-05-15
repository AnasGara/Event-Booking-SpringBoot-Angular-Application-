import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { Event } from '../Models/Event.model';
import { APIsService } from '../Services/apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: any
  role: string = ""
  helper = new JwtHelperService()
  lstEvents: Event[] = []
  constructor(
    private router: Router,
    private toast: NgToastService,
    private service: APIsService
  ) { }

  createEvent() {
    if (this.token == null) {
      this.toast.warning({
        detail: "You have to login to access this page"
      })
      this.router.navigate(["/signinorganizer"])
    }
    else {
      this.router.navigate(["/createevent"])

    }
  }


  ngOnInit(): void {
    this.service.getEvents().subscribe(res => {
      this.lstEvents = res
    })
    this.token = localStorage.getItem("token")
    if (this.token != null) {
      let decodeToken = this.helper.decodeToken(this.token)
      this.role = decodeToken.role
      console.log(this.role)
    }



  }
}
