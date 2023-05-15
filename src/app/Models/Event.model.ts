import { EventUser } from "./EventUser.model";
import { Organizer } from "./Organizer.model";
import { User } from "./User.model";
import { Venue } from "./Venue.model";

export class Event {

    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public date?: string,
        public time?: string,
        public duration?: string,
        public banner?: string,
        public description?: string,
        public price?: number,
        public organizer?: Organizer,
        public venue?: Venue,
        public eventUsers?: EventUser[]

    ) {

    }
}