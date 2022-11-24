import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class AuthComponent implements OnInit, OnDestroy {

  loginForm: FormGroup = new FormGroup({});
  authSubscription$: Subscription = new Subscription();

  constructor(private _fb: FormBuilder, private _router: Router, private _authService: AuthService) {
  }

  ngOnInit(): void {
    this.initLoginFromGroup();
  }

  private initLoginFromGroup = (): void => {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitLogin = (formValues: any): void => {

    if (this.loginForm.invalid) {
      return;
    }

    const authDto: AuthDto = { username: formValues.username, password: formValues.password };

    this.authSubscription$ = this._authService.authUser(authDto).subscribe((resp) => {
      if (resp.error_code === 0) {
        sessionStorage.setItem('isAuth', 'true');
        sessionStorage.setItem('access_token', resp.data.access_token);
        sessionStorage.setItem('user_role', JSON.stringify(resp.data.role));
        this._router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    this.authSubscription$ && !this.authSubscription$.closed && this.authSubscription$.unsubscribe();
  }

}
