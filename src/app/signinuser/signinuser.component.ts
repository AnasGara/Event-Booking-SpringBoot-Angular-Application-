import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../Models/User.model';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { APIsService } from '../Services/apis.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-signinuser',
  templateUrl: './signinuser.component.html',
  styleUrls: ['./signinuser.component.css']
})
export class SigninuserComponent implements OnInit {

  User = new User()
  helper = new JwtHelperService()

  @ViewChild('myForm') myForm?: NgForm;
  constructor(
    private toast: NgToastService,
    private router: Router,
    private service: APIsService
  ) {

  }


  submit() {
    if (this.myForm!.valid) {
      this.service.loginUser(this.User).subscribe(res => {
        console.log(res)
        this.toast.success({
          detail: "Login success"
        })
        localStorage.setItem("token", res.token)
        this.router.navigate(["/home"])
      }, err => {
        console.log(err)
        this.toast.error({
          detail: "Wrong data"
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
    let Token: any = localStorage.getItem("token")
    console.log(Token)
    if (Token != null) {
      let decodeToken = this.helper.decodeToken(Token)
      console.log(decodeToken.role)

      console.log(decodeToken.data)
    }
  }

}
