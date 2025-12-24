import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AdminDataLogin, UserLogin } from '../../models/models';
import { emailPath, lockPath, unlockPath } from '../../data/icon-paths';
import { AdminAdmins } from '../../services/admin-admins';
import { Router } from '@angular/router';
import { comparePasswords, passwordRequirements } from './validators';
import { ErrorMessage } from '../error-message/error-message';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ErrorMessage],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  public userForm!: FormGroup<UserLogin>;
  public emailPath: string = emailPath;
  public lockPath: string = lockPath;
  public unlockPath: string = unlockPath;

  constructor(public adminAdmins: AdminAdmins, public router: Router) {}

  public ngOnInit() {
    this.userForm = new FormGroup<UserLogin>(
      {
        email: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, Validators.email],
        }),
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
    const { email, password } = this.userForm.getRawValue();
    const adminData: AdminDataLogin = { email, password };
    this.adminAdmins.loginAdmin(adminData).subscribe({
      next: (response) => {
        localStorage.setItem('adminStored', JSON.stringify(response));
        this.router.navigate(['/admin-panel']);
        this.userForm.reset();
      },
      error: (err) =>
        err.status === 401
          ? alert('Email o contraseña incorrectos.')
          : alert('Error del servidor. Inténtalo más tarde.'),
    });
  }
}
