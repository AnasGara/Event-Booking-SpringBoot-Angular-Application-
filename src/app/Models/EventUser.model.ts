import { Event } from "./Event.model";
import { User } from "./User.model";

export class EventUser {

    constructor(
        public id?: number,
        public event?: Event,
        public user?: User,
        public date?: string

    ) {

    }
}