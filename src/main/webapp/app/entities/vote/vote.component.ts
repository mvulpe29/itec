import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { Vote } from './vote.model';
import { VoteService } from './vote.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-vote',
    templateUrl: './vote.component.html'
})
export class VoteComponent implements OnInit, OnDestroy {
votes: Vote[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private voteService: VoteService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.voteService.query().subscribe(
            (res: ResponseWrapper) => {
                this.votes = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInVotes();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Vote) {
        return item.id;
    }
    registerChangeInVotes() {
        this.eventSubscriber = this.eventManager.subscribe('voteListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
