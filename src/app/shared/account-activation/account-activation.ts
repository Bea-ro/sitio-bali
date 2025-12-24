import { Component, OnInit } from '@angular/core';
import { PasswordForm } from '../../models/models';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { comparePasswords, passwordRequirements } from '../login/validators';
import { Button } from '../button/button';
import { AdminAdmins } from '../../services/admin-admins';

@Component({
  selector: 'app-account-activation',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './account-activation.html',
  styleUrl: './account-activation.css',
})
export class AccountActivation implements OnInit {
  public validToken: boolean = false;
  public passwordForm!: FormGroup<PasswordForm>;

  constructor(private route: ActivatedRoute, private adminAdmins: AdminAdmins) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const token = params['token'];
      this.validToken = this.adminAdmins.isAuthenticated();
      console.log(this.validToken);
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

  public onSumbit() {
    const { password } = this.passwordForm.getRawValue();
    //hacer un patch para añadirle password al usuario
    // this.adminAdmins.loginAdmin(adminData).subscribe({
    //   next: (response) => {
    //     this.router.navigate(['/admin-login']);
    //     this.passwordForm.reset();
    //   },
    //   error: (err) =>
    //     err.status === 401
    //       ? alert('Las contraseñas no coinciden.')
    //       : alert('Error del servidor. Inténtalo más tarde.'),
    // });
  }

  public resendEmail() {
    //cómo le pasamos la acción al botón
  }
}
