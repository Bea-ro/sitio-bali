import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminForm } from '../../../../../models/models';
import { AdminAdmins } from '../../../../../services/admin-admins';
import { ErrorMessage } from '../../../../../shared/error-message/error-message';
import { AcceptCancelButtons } from '../../../../../shared/accept-cancel-buttons/accept-cancel-buttons';

@Component({
  selector: 'app-nuevo-admin',
  imports: [ReactiveFormsModule, ErrorMessage, AcceptCancelButtons],
  templateUrl: './nuevo-admin.html',
  styleUrl: './nuevo-admin.css',
})
export class NuevoAdmin implements OnInit {
  public adminFields!: FormGroup<AdminForm>;
  public roles: string[] = ['admin', 'editor'];

  constructor(public adminAdmins: AdminAdmins) {}

  public ngOnInit() {
    this.adminFields = new FormGroup<AdminForm>({
      rol: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
    });
    this.adminFields.get('rol')!.setValue('');
  }

  public onSubmit() {
    const newAdmin = this.adminFields.getRawValue();
    this.adminAdmins.registerAdmin$(newAdmin).subscribe({
      next: () => alert('Usuario registrado. Se le ha enviado un email de activación.'),
      error: (message) => alert(message),
    });
    this.adminFields.reset();
  }
}
