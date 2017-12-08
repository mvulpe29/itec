import {Component, OnInit} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {JhiEventManager} from 'ng-jhipster';
import {} from '@types/googlemaps';

import {Account, LoginModalService, Principal} from '../shared';
import {Message} from 'primeng/primeng';

declare var google: any;

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.scss'
    ]

})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    overlays: any[];
    dialogVisible: boolean;
    options: any;
    map: google.maps.Map;
    selectedPosition: any;
    msgs: Message[] = [];
    markerTitle: string;
    infoWindow: any;

    constructor(private principal: Principal,
                private loginModalService: LoginModalService,
                private eventManager: JhiEventManager) {
    }

    ngOnInit() {
        this.options = {
            zoom: 14
        };
        this.initOverlays();

        this.principal.identity().then((account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    initOverlays() {
        if (!this.overlays || !this.overlays.length) {
            this.overlays = [];
        }
    }

    setMap(event) {
        this.map = event.map;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.map.setCenter(pos);
                this.infoWindow = new google.maps.InfoWindow();
                this.infoWindow.setPosition(pos);
            }
        );
    }

    addMarker() {
        this.overlays.push(new google.maps.Marker({
            position: {
                lat: this.selectedPosition.lat(),
                lng: this.selectedPosition.lng()
            }, title: this.markerTitle
        }));
        this.markerTitle = null;
        this.dialogVisible = false;
    }

    handleMapClick(event) {
        this.msgs.push({severity: 'info', summary: 'Marker Selected', detail: 'jjj'});

        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
