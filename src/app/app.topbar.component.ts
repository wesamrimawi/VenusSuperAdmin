import { transition } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';


@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {

  constructor(public app: AppComponent, public appMain: AppMainComponent , private _translator: TranslateService,private _router: Router) {}
    changeLanguage = (lang: string): void => {
    this._translator.use(lang);
    localStorage.setItem('LANG', lang);
    lang=="ar"?this.app.isRTL=true:this.app.isRTL=false
    
  }
  logOut() {
    sessionStorage.clear();
    this._router.navigate(['login']);
  }


}
