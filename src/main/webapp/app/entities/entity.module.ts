import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ItecLocationModule } from './location/location.module';
import { ItecIssueModule } from './issue/issue.module';
import { ItecVoteModule } from './vote/vote.module';
import { ItecCommentModule } from './comment/comment.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        ItecLocationModule,
        ItecIssueModule,
        ItecVoteModule,
        ItecCommentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItecEntityModule {}
