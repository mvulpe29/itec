import { BaseEntity, User } from './../../shared';

export class Comment implements BaseEntity {
    constructor(
        public id?: number,
        public content?: string,
        public deleted?: boolean,
        public issue?: BaseEntity,
        public user?: User,
    ) {
        this.deleted = false;
    }
}
