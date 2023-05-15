import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../Models/User.model';
import { Organizer } from '../Models/Organizer.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { APIsService } from '../Services/apis.service';

@Component({
  selector: 'app-signuporganizer',
  templateUrl: './signuporganizer.component.html',
  styleUrls: ['./signuporganizer.component.css']
})
export class SignuporganizerComponent implements OnInit {

  Organizer = new Organizer();


  @ViewChild('myForm') myForm?: NgForm;
  constructor(
    private router: Router,
    private toast: NgToastService,
    private service: APIsService
  ) {

  }

  submit() {
    if (this.myForm?.valid) {

      console.log(this.Organizer)
      this.service.registerOrganizer(this.Organizer).subscribe(
        res => {
          this.router.navigate(["/signinorganizer"])

          console.log(res)
          this.toast.success({
            detail: "Sign up success"
          })
        }, err => {
          console.log(err)
          this.toast.warning({
            detail: "Email already exist"
          })
        })
    }
    else {
      this.toast.warning({
        detail: "Fields required"
      })
    }
  }

  ngOnInit(): void {
  }

}
