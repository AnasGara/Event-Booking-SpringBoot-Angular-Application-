import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../Models/User.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { APIsService } from '../Services/apis.service';

@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.css']
})
export class SignupuserComponent implements OnInit {
  User = new User()

  @ViewChild('myForm') myForm?: NgForm;
  constructor(
    private router: Router,
    private toast: NgToastService,
    private service: APIsService
  ) {

  }

  submit() {
    if (this.myForm?.valid) {

      console.log(this.User)
      this.service.registerUser(this.User).subscribe(
        res => {
          this.router.navigate(["/signinuser"])

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
