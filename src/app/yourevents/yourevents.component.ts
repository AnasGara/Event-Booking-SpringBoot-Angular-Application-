import { Component, OnInit } from '@angular/core';
import { Event } from '../Models/Event.model';
import { APIsService } from '../Services/apis.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-yourevents',
  templateUrl: './yourevents.component.html',
  styleUrls: ['./yourevents.component.css']
})
export class YoureventsComponent implements OnInit {


  lstevent: Event[] = []
  helper = new JwtHelperService()
  idOrganizer: number = 0
  constructor(
    private service: APIsService,
    private toast: NgToastService
  ) { }

  deleteEvent(id: number) {
    if (confirm("Voulez vous supprimer cette Event ?")) {
      this.service.deleteEvent(id).subscribe(() => {
        window.location.reload();

      });

    }
  }

  ngOnInit(): void {
    let token = localStorage.getItem("token")
    if (token != null) {
      let decodeToken = this.helper.decodeToken(token)
      this.idOrganizer = decodeToken.data.id
    }
    this.service.getEventsByorganizerId(this.idOrganizer).subscribe(res => {
      this.lstevent = res
      console.log(this.lstevent)
    })
  }

}
