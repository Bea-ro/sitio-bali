import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AdminDataLogin, UserLogin } from '../../models/models';
import { emailPath, lockPath } from '../../data/icon-paths';
import { AdminAdmins } from '../../services/admin-admins';
import { Router } from '@angular/router';
import { comparePasswords } from '../../pages/admin-login/validators';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  public userForm!: FormGroup<UserLogin>;
  public emailPath: string = emailPath;
  public lockPath: string = lockPath;

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
