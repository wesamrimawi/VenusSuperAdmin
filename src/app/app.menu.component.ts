import { Component, OnInit } from "@angular/core";
import {
    trigger,
    state,
    style,
    transition,
    animate,
} from "@angular/animations";
import { AppComponent } from "./app.component";
import { AppMainComponent } from "./app.main.component";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-menu",
    templateUrl: "./app.menu.component.html",
    animations: [
        trigger("inline", [
            state(
                "hidden",
                style({
                    height: "0px",
                    overflow: "hidden",
                })
            ),
            state(
                "visible",
                style({
                    height: "*",
                })
            ),
            state(
                "hiddenAnimated",
                style({
                    height: "0px",
                    overflow: "hidden",
                })
            ),
            state(
                "visibleAnimated",
                style({
                    height: "*",
                })
            ),
            transition(
                "visibleAnimated => hiddenAnimated",
                animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")
            ),
            transition(
                "hiddenAnimated => visibleAnimated",
                animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")
            ),
        ]),
    ],
})
export class AppMenuComponent implements OnInit {
    model: any[];

    constructor(public app: AppComponent, public appMain: AppMainComponent, private _translate: TranslateService) { }

    ngOnInit() {
        this.model = [
            {

                items: [
                    {
                        label: this._translate.instant('dashboard'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['dashboard'],
                        routerLinkActiveOptions: 'exact:true'
                    },
                    {
                        label: this._translate.instant('Clients'),
                        icon: 'pi pi-users icons',
                        routerLink: ['clients'],
                        routerLinkActiveOptions: 'exact:true'
                    },
                    // {
                    //     label: this._translate.instant('Clients'),
                    //     icon: 'pi pi-fw pi-dollar',
                    //     routerLink: ['/clients'],
                    //     items: [
                    //         {
                    //             label: this._translate.instant('sales'),
                    //             icon: 'pi pi-fw pi-money-bill',
                    //             routerLink: ['sales'],
                    //             routerLinkActiveOptions: ["exact:true"],
                    //         },
                    //         // {
                    //         //     label: 'Debits',
                    //         //     icon: 'pi pi-fw pi-wallet',
                    //         //     routerLink: ['sales/debits'],
                    //         //     routerLinkActiveOptions: 'exact:true'
                    //         // },
                    //         // {
                    //         //     label: 'App Orders',
                    //         //     icon: 'pi pi-fw pi-mobile',
                    //         //     routerLink: ['sales/app-orders'],
                    //         //     routerLinkActiveOptions: 'exact:true'
                    //         // },
                    //     ],
                    // },
                    {
                        label: this._translate.instant('Tags'),
                        icon: 'pi pi-tags icons',
                        routerLink: ['tags'],
                        routerLinkActiveOptions: 'exact:true'
                    },
                    {
                        label: this._translate.instant('Plans'),
                        icon: 'pi pi-briefcase icons',
                        routerLink: ['plans'],
                        routerLinkActiveOptions: 'exact:true'
                    },
                    
                    {
                        label: this._translate.instant('Products'),
                        icon: 'pi pi-desktop icons',
                        routerLink: ['products'],
                        routerLinkActiveOptions: 'exact:true'
                    },
                    {
                        label: this._translate.instant('Users'),
                        icon: 'pi pi-user-edit icons',
                        routerLink: ['users'],
                        routerLinkActiveOptions: 'exact:true'
                    },
                    {
                        label: this._translate.instant('User Groups'),
                        icon: 'pi pi-user-edit icons',
                        routerLink: ['usergroups'],
                        routerLinkActiveOptions: 'exact:true'
                    },
                    {
                        label: this._translate.instant('Modules'),
                        icon: 'pi pi-sitemap icons',
                        routerLink: ['systemmodules'],
                        routerLinkActiveOptions: 'exact:true'
                    }
                    
                ]
            }
        ];
    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
