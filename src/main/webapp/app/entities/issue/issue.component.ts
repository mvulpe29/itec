import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { Issue } from './issue.model';
import { IssueService } from './issue.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-issue',
    templateUrl: './issue.component.html'
})
export class IssueComponent implements OnInit, OnDestroy {
issues: Issue[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private issueService: IssueService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.issueService.query().subscribe(
            (res: ResponseWrapper) => {
                this.issues = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInIssues();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Issue) {
        return item.id;
    }
    registerChangeInIssues() {
        this.eventSubscriber = this.eventManager.subscribe('issueListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
