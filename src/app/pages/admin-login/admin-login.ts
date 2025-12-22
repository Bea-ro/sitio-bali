import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { AdminDataLogin, UserLogin } from '../../models/models';
import { CommonModule } from '@angular/common';
import { comparePasswords, emailValidator } from './validators';
import { AdminAdmins } from '../../services/admin-admins';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin implements OnInit {
  public userForm!: FormGroup<UserLogin>;

  constructor(public adminAdmins: AdminAdmins, public router: Router) {}

  public ngOnInit() {
    this.userForm = new FormGroup<UserLogin>(
      {
        email: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, emailValidator],
        }),
        password: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(6)],
        }),
        repeatPassword: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(6)],
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
