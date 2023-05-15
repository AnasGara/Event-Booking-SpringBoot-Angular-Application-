import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Organizer } from '../Models/Organizer.model';
import { Event } from '../Models/Event.model';
import { Venue } from '../Models/Venue.model';
import { Observable } from 'rxjs';
import { User } from '../Models/User.model';
import { EventUser } from '../Models/EventUser.model';


const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class APIsService {

  event = "http://localhost:8080/event"
  organizer = "http://localhost:8080/organizer"
  user = "http://localhost:8080/user"
  venue = "http://localhost:8080/venue"
  eventuser = "http://localhost:8080/eventuser"

  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService,
  ) { }

  registerOrganizer(organizer: Organizer) {
    return this.http.post<any>(this.organizer + "/register", organizer);
  }


  loginOrganizer(organizer: Organizer) {
    return this.http.post<any>(this.organizer + "/login", organizer);
  }
  registerUser(user: User) {
    return this.http.post<any>(this.user + "/register", user);
  }


  loginUser(user: User) {
    return this.http.post<any>(this.user + "/login", user);
  }

  getOrganizerByEmail(email: string) {
    return this.http.get<Organizer>(this.organizer + "/getbyemail", { params: { email } })
  }
  getLastEvent() {
    return this.http.get<Event>(this.event + "/last")
  }
  addEvent(event: Event, id: number) {
    const URL = `${this.event}/${id}`
    return this.http.post<Event>(URL, event)
  }
  addvenue(venue: Venue, id: number) {
    const URL = `${this.venue}/${id}`
    return this.http.post<any>(URL, venue);
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.event);

  }
  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.event}/${id}`)
  }
  addeventuser(eventuser: EventUser) {
    return this.http.post<any>(this.eventuser, eventuser);
  }

  findEventUserIdAndUserId(eventId: number, userId: number): Observable<EventUser> {
    const url = `${this.eventuser}/${eventId}/${userId}`
    return this.http.get<EventUser>(url);
  }

  getEventsByorganizerId(id: number) {
    return this.http.get<Event[]>(`${this.event + "/getbyorganizer"}/${id}`)
  }


  deleteEvent(id: number) {
    const URL = `${this.event}/${id}`
    return this.http.delete(URL, httpOption)
  }

  getUserById(id: number): Observable<Event> {
    return this.http.get<User>(`${this.user}/${id}`)
  }


  getBookedEvents(id: number) {
    return this.http.get<Event[]>(`${this.event}/bookedEvent/${id}`)
  }
}
