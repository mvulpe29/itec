import { BaseEntity } from './../../shared';

export class Location implements BaseEntity {
    constructor(
        public id?: number,
        public latitute?: number,
        public longitude?: number,
    ) {
    }
}
