import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class AuthComponent implements OnInit, OnDestroy {

  loginForm: FormGroup = new FormGroup({});
  authSubscription$: Subscription = new Subscription();
  sidebarVisible: boolean;
  pageDir: string = 'rtl';
  showPassword: boolean = false;
  passwordInputType: string = 'password';
  errorMsg: boolean = false;
  lang: string = localStorage.getItem('LANG') ?? 'ar';

  constructor(private _fb: FormBuilder,private _cdr: ChangeDetectorRef,private _translate: TranslateService, private _router: Router, private _authService: AuthService) {
  }

  ngOnInit(): void {
    this.initLoginFromGroup();
    this._translate.getTranslation(this._translate.currentLang).subscribe()
    this.pageDir = this.lang == 'ar' ? 'rtl' : 'ltr';
  }


  @ViewChild('globeSvg') globeSvg: ElementRef

  toggleColor() {
    const svgElement = this.globeSvg.nativeElement
    svgElement.querySelectorAll('path').setAttriute('fill', '#86de76')
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    this.passwordInputType = this.showPassword ? 'text' : 'password';
  }

  private initLoginFromGroup = (): void => {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
   changeLanguage = (lang: string): void => {
    this._translate.setDefaultLang(lang);
    this._translate.use(lang);
    localStorage.setItem("LANG", lang);
    this.pageDir = lang == 'ar' ? 'rtl' : 'ltr';
    this.refreshView(); 
    this.sidebarVisible = !this.sidebarVisible
  }
  refreshView = (): void => {
    this._cdr.detectChanges();
  }

  submitLogin = (formValues: any): void => {

    if (this.loginForm.invalid || this.loginForm.value.username === null) {
      return;
    }
    
    const authDto: AuthDto = { username: formValues.username, password: formValues.password };
    
    this.authSubscription$ = this._authService.authUser(authDto).subscribe((resp) => {
      if (resp.error_message !== 'success') {
      this.errorMsg = true;
      console.log(this.errorMsg)
      return;
    }

    if (resp.error_message === 'success') {
       sessionStorage.setItem('isAuth', 'true');
        sessionStorage.setItem('access_token', resp.data.access_token);
        sessionStorage.setItem('user_role', JSON.stringify(resp.data.role));
        this._router.navigate(['/']);
    }
    });
    // const resp = await this._authService.authUser(authDto).toPromise();
    
    
    // console.log(resp.error_message)
  }

  ngOnDestroy(): void {
    this.authSubscription$ && !this.authSubscription$.closed && this.authSubscription$.unsubscribe();
  }

}
