import { Component, OnInit } from '@angular/core';
import { Event } from '../Models/Event.model';
import { APIsService } from '../Services/apis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = []
  id: number = 0

  constructor(
    private service: APIsService,
    private rout: ActivatedRoute,
    private toast: NgToastService,
    private router: Router



  ) { }

  ngOnInit(): void {

    this.service.getEvents().subscribe(res => {
      this.events = res
      console.log(this.events)


    })
  }

}
