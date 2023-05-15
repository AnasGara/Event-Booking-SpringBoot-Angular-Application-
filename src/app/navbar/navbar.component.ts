import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Organizer } from '../Models/Organizer.model';
import { User } from '../Models/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: any
  role: any
  helper = new JwtHelperService()
  // organizer = new Organizer()
  user = new User() || new Organizer
  constructor(
    private router: Router

  ) {

  }




  Logout() {

    this.router.navigate(["/home"])
    localStorage.clear()
    window.location.reload()


  }





  ngOnInit(): void {
    this.token = localStorage.getItem("token")
    if (this.token != null) {
      let decodeToken = this.helper.decodeToken(this.token)
      this.role = decodeToken.role
      this.user = decodeToken.data
      console.log(this.user)

    }

  }




}
