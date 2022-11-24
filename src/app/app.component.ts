import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {PrimeNGConfig} from 'primeng/api';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

    layoutMode = 'static';

    lightMenu = true;

    topbarColor = 'layout-topbar-blue';

    inlineUser = false;

    isRTL = false;

    inputStyle = 'outlined';

    ripple = true;

    constructor(private primengConfig: PrimeNGConfig , private _translate: TranslateService) {
        const lang: string = localStorage.getItem('LANG') ?? 'en';
        this._translate.setDefaultLang(lang);
        this._translate.use(lang);

        console.log(lang)
     }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }


}
