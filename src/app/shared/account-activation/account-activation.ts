import { Component, OnInit } from '@angular/core';
import { PasswordForm } from '../../models/models';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { comparePasswords, passwordRequirements } from '../login/validators';
import { Button } from '../button/button';
import { Auth } from '../../services/auth';
import { PASSWORD_MESSAGES } from '../../data/messages';
import { ErrorMessage } from '../error-message/error-message';
import { hidePassPath, lockPath, showPassPath, unlockPath } from '../../data/icon-paths';
import { IconButton } from '../icon-button/icon-button';

@Component({
  selector: 'app-account-activation',
  imports: [ReactiveFormsModule, Button, ErrorMessage, IconButton],
  templateUrl: './account-activation.html',
  styleUrl: './account-activation.css',
})
export class AccountActivation implements OnInit {
  public validToken: boolean = false;
  public token: string = '';
  public passwordForm!: FormGroup<PasswordForm>;
  public passwordRequitements: string = PASSWORD_MESSAGES.INVALID;
  public lockPath: string = lockPath;
  public unlockPath: string = unlockPath;
  public showPassOne: boolean = false;
  public showPassTwo: boolean = false;
  public showPassPath: string = showPassPath;
  public hidePassPath: string = hidePassPath;

  constructor(private route: ActivatedRoute, private auth: Auth, private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.token = params['token'];
      this.auth.tokenValidity(this.token).subscribe({
        next: () => (this.validToken = true),
        error: () => (this.validToken = false),
      });
      //this.validToken = this.adminAdmins.isAuthenticated();
    });

    this.passwordForm = new FormGroup<PasswordForm>(
      {
        password: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, passwordRequirements()],
        }),
        repeatPassword: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, passwordRequirements()],
        }),
      },
      comparePasswords as ValidatorFn
    );
  }

  public onSubmit() {
    const { password } = this.passwordForm.getRawValue();
    const accountData = {
      password: password,
      token: this.token,
    };

    this.auth.activateAccount(accountData).subscribe({
      next: (res) => {
        console.log(res);
        res.user.rol === 'cliente'
          ? this.router.navigate(['/area-privada'])
          : this.router.navigate(['/admin-login']);
        alert('Cuenta activada.');
        this.passwordForm.reset();
      },
      error: () => {
        alert('Se ha producido un error al activar la cuenta. Por favor, inténtalo más tarde.');
        this.passwordForm.reset();
      },
    });
  }

  public resendEmail() {
    //cómo le pasamos la acción al botón
  }
}
