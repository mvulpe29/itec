import { BaseEntity, User } from './../../shared';

export class Issue implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public detail?: string,
        public archived?: boolean,
        public solved?: boolean,
        public location?: BaseEntity,
        public user?: User,
        public comments?: BaseEntity[],
    ) {
        this.archived = false;
        this.solved = false;
    }
}
