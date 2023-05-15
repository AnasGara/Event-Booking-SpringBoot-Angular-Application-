import { Component, OnInit, ViewChild } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Organizer } from '../Models/Organizer.model';
import { Venue } from '../Models/Venue.model';
import { Event } from '../Models/Event.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { APIsService } from '../Services/apis.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})



export class CreateeventComponent implements OnInit {
  selectedDate: Date = new Date();
  lastEvent = new Event();
  organizer = new Organizer();
  venue = new Venue();
  event = new Event()
  helper = new JwtHelperService()
  userFile: any
  message?: String
  imagePath: any
  imgURL: any

  @ViewChild('myForm') myForm?: NgForm;

  constructor(
    private toast: NgToastService,
    private router: Router,
    private service: APIsService
  ) {


  }


  onSelectedDuration(value: string): void {
    this.event.duration = value;
    console.log(this.event.duration)
  }
  onSelectedTime(value: string): void {
    this.event.time = value;
    console.log(this.event.time)
  }
  onSelectedCategory(value: string): void {
    this.event.category = value;
    console.log(this.event.category)
  }

  // checkProperties(obj: any) {
  //   for (var key in obj) {
  //     if (obj[key] == null || obj[key] == '') {
  //       if (key == "id" || key == "organizer" || key == "venue" || key == "users" || key == "event" || key == "banner") {
  //         continue;
  //       }
  //       return false;
  //     }
  //   }
  //   return true;
  // }


  submit() {
    this.event.date = this.selectedDate.toISOString().slice(0, 10)
    const date = new Date(this.event.date);

    // Define options for the output string
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };

    this.event.date = date.toLocaleString('en-US', options);
    console.log(this.event.date)
    if (this.event.time == null) {
      this.event.time = "10:00 AM"
    }
    if (this.event.duration == null) {
      this.event.duration = "1h"
    }

    if (this.myForm!.valid) {
      if (this.event.banner == null) {
        this.toast.warning({
          detail: "You need to select a banner for your event"
        })
        return;
      }
      this.service.addEvent(this.event, this.organizer.id!).subscribe(eventRes => {
        console.log(eventRes)
        this.service.getLastEvent().subscribe(lstevent => {
          this.lastEvent = lstevent

          this.service.addvenue(this.venue, this.lastEvent.id!).subscribe(res => {
            console.log(res)
            this.router.navigate(["/yourevents"])

            this.toast.success({
              detail: "Event has been created succeffuly"
            })
          })
        })
      }, err => {
        console.log(err)
      })
    } else {
      this.toast.warning({
        detail: "Fields required"
      })
    }


  }
  onSelectFile(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;


      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        console.log(this.message)
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
        this.event.banner = this.imgURL

      };
    }
  }

  ngOnInit(): void {
    // this.reloadJsFile();
    let token = localStorage.getItem("token");
    if (token != null) {
      let decodetoken = this.helper.decodeToken(token)
      this.organizer = decodetoken.data
    }
  }

}
