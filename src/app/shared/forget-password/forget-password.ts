import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emailPath } from '../../data/icon-paths';
import { ErrorMessage } from '../error-message/error-message';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule, ErrorMessage],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword implements OnInit {
  public resetPasswordForm!: FormGroup;
  public emailPath: string = emailPath;

  @Input() passwordForgotten: boolean = false;
  @Output() close = new EventEmitter<void>();

  constructor(public auth: Auth) {}

  public ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
    });
  }

  public onSubmit() {
    const { email } = this.resetPasswordForm.getRawValue();
    this.auth.sendResetEmail(email).subscribe({
      next: (res) => alert(res.message),
      error: (message) => alert(message),
    });
    this.resetPasswordForm.reset();
  }

  public onClose() {
    this.close.emit();
  }
}
