import { EventUser } from "./EventUser.model";

export class User {

    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public password?: string,
        public email?: string,
        public photo?: String,
        public eventUsers?: EventUser[]
    ) {
    }
}