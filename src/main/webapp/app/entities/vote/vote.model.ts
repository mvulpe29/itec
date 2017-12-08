import { BaseEntity, User } from './../../shared';

export class Vote implements BaseEntity {
    constructor(
        public id?: number,
        public up?: boolean,
        public down?: boolean,
        public comment?: BaseEntity,
        public user?: User,
    ) {
        this.up = false;
        this.down = false;
    }
}
