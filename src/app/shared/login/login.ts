import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminDataLogin, UserLogin } from '../../models/models';
import { emailPath, hidePassPath, lockPath, showPassPath, unlockPath } from '../../data/icon-paths';
import { AdminAdmins } from '../../services/admin-admins';
import { Router } from '@angular/router';
import { passwordRequirements } from './validators';
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
  public unlockPath: string = unlockPath;
  public showPass: boolean = false;
  public showPassPath: string = showPassPath;
  public hidePassPath: string = hidePassPath;

  constructor(public adminAdmins: AdminAdmins, public router: Router) {}

  public ngOnInit() {
    this.userForm = new FormGroup<UserLogin>({
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, passwordRequirements()],
      }),
    });
  }

  public onSubmit() {
    const { email, password } = this.userForm.getRawValue();
    const adminData: AdminDataLogin = { email, password };
    console.log(adminData);
    this.adminAdmins.loginAdmin(adminData).subscribe({
      next: (response) => {
        localStorage.setItem('adminStored', JSON.stringify(response));
        this.router.navigate(['/admin-panel']);
        this.userForm.reset();
      },
      error: (err) => alert(err.error.message),
    });
  }
}
