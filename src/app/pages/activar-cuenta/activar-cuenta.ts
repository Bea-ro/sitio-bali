import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PasswordForm } from '../../models/models';
import { comparePasswords } from '../admin-login/validators';

@Component({
  selector: 'app-activar-cuenta',
  imports: [ReactiveFormsModule],
  templateUrl: './activar-cuenta.html',
  styleUrl: './activar-cuenta.css',
})
export class ActivarCuenta implements OnInit {
  public validToken: boolean = false;
  public passwordForm!: FormGroup<PasswordForm>;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const token = params['token'];
      //comprobar si el token sigue válido: servicio endpoint backend (/auth/verify-activation-token por ejemplo) (esto también puedo usar la función del frontend isAuth)
    });

    this.passwordForm = new FormGroup<PasswordForm>(
      {
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
}
