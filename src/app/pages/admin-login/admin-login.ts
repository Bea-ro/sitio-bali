import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { UserRegister } from '../../models/models';
import { CommonModule } from '@angular/common';
import { comparePasswords, emailValidator } from './validators';

@Component({
  selector: 'app-admin-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin implements OnInit {
  public userForm?: FormGroup<UserRegister>;
  public adminLoginMessage: string = '';

  public ngOnInit() {
    this.userForm = new FormGroup<UserRegister>(
      {
        name: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
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
    console.log(this.userForm?.value);
  }
}
