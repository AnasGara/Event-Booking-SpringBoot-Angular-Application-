export class Organizer {

    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public password?: string,
        public email?: string,
        public photo?: String,
        public events?: Event[]

    ) {
    }
}