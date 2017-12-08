import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ItecSharedModule } from '../../shared';
import { ItecAdminModule } from '../../admin/admin.module';
import {
    IssueService,
    IssuePopupService,
    IssueComponent,
    IssueDetailComponent,
    IssueDialogComponent,
    IssuePopupComponent,
    IssueDeletePopupComponent,
    IssueDeleteDialogComponent,
    issueRoute,
    issuePopupRoute,
} from './';

const ENTITY_STATES = [
    ...issueRoute,
    ...issuePopupRoute,
];

@NgModule({
    imports: [
        ItecSharedModule,
        ItecAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        IssueComponent,
        IssueDetailComponent,
        IssueDialogComponent,
        IssueDeleteDialogComponent,
        IssuePopupComponent,
        IssueDeletePopupComponent,
    ],
    entryComponents: [
        IssueComponent,
        IssueDialogComponent,
        IssuePopupComponent,
        IssueDeleteDialogComponent,
        IssueDeletePopupComponent,
    ],
    providers: [
        IssueService,
        IssuePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItecIssueModule {}
