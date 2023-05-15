import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User.model';
import { APIsService } from '../Services/apis.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Event } from '../Models/Event.model';

@Component({
  selector: 'app-bookedevents',
  templateUrl: './bookedevents.component.html',
  styleUrls: ['./bookedevents.component.css']
})
export class BookedeventsComponent implements OnInit {
  idUser: number = 0
  user = new User()
  helper = new JwtHelperService()
  bookedEvents: Event[] = []
  constructor(
    private service: APIsService,
    private toast: NgToastService,
    private router: Router
  ) { }



  download(id: number) {
    this.router.navigate(["/invoice", id])


  }
  ngOnInit(): void {
    let token = localStorage.getItem("token")
    if (token != null) {
      let decodeToken = this.helper.decodeToken(token)
      this.idUser = decodeToken.data.id

      this.service.getBookedEvents(this.idUser).subscribe(res => {
        this.bookedEvents = res
        console.log(this.bookedEvents)
      })
    }

  }

}
