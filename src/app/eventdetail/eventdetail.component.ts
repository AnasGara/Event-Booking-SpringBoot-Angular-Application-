import { Component, OnInit } from '@angular/core';
import { APIsService } from '../Services/apis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Event } from '../Models/Event.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {
  id: number = 0
  event = new Event()
  month: string = ""
  day: string = ""
  helper = new JwtHelperService()
  role: string = ""
  token: any
  constructor(
    private service: APIsService,
    private rout: ActivatedRoute,
    private toast: NgToastService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.id = this.rout.snapshot.params["id"];
    this.service.getEventById(this.id).subscribe(res => {
      this.event = res
      console.log(this.event)
      this.month = this.event.date!.split(" ")[0]
      this.day = this.event.date!.split(" ")[1].slice(0, -1)
    })
    this.token = localStorage.getItem("token");
    if (this.token != null) {
      const decodeToken = this.helper.decodeToken(this.token)
      this.role = decodeToken.role
      console.log(this.role)
    }

  }

}
