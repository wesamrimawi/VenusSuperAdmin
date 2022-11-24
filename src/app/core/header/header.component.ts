import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private _translator: TranslateService,private _router: Router) {
  }


  ngOnInit() { }

  changeLanguage = (lang: string): void => {
    this._translator.use(lang);
    localStorage.setItem('LANG', lang);
  }

  logOut() {
    sessionStorage.clear();
    this._router.navigate(['login']);
  }

}
