import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Event } from '../Models/Event.model';
import { ActivatedRoute } from '@angular/router';
import { APIsService } from '../Services/apis.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../Models/User.model';
import { EventUser } from '../Models/EventUser.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {


  event = new Event()
  helper = new JwtHelperService()
  user = new User()
  eventUser = new EventUser()
  constructor(
    private rout: ActivatedRoute,
    private service: APIsService
  ) { }
  downloadPDF() {
    const doc = new jsPDF();
    const content = document.getElementById("invoice");

    html2canvas(content!).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgProps = doc.getImageProperties(imgData);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      doc.save('invoice.pdf');
    });
  }

  ngOnInit(): void {
    let token = localStorage.getItem("token")
    if (token != null) {
      let decodeToken = this.helper.decodeToken(token)
      this.user = decodeToken.data
      console.log(this.user)
    }
    let id = this.rout.snapshot.params["id"]
    this.service.getEventById(id).subscribe(res => {
      this.event = res
    })
    this.service.findEventUserIdAndUserId(id, this.user.id!).subscribe(res => {
      this.eventUser = res
      console.log(this.eventUser)
    })

  }

}
