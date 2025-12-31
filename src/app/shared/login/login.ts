import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLogin, UserDataLogin } from '../../models/models';
import { emailPath, hidePassPath, showPassPath, unlockPath } from '../../data/icon-paths';
import { AdminAdmins } from '../../services/admin-admins';
import { NavigationEnd, Router } from '@angular/router';
import { passwordRequirements } from './validators';
import { ErrorMessage } from '../error-message/error-message';
import { IconButton } from '../icon-button/icon-button';
import { AdminClientesService } from '../../services/admin-clientes';
import { filter } from 'rxjs';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ErrorMessage, IconButton],
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
  private currentRoute = signal('');

  constructor(
    public adminAdmins: AdminAdmins,
    public router: Router,
    public adminClientes: AdminClientesService
  ) {}

  public ngOnInit() {
    this.currentRoute.set(this.router.url);
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => this.currentRoute.set(e.urlAfterRedirects));

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
    const userData: UserDataLogin = { email, password };

    if (this.currentRoute() === '/admin-login') {
      this.adminAdmins.loginAdmin(userData).subscribe({
        next: (response) => {
          localStorage.setItem('userStored', JSON.stringify(response));
          this.router.navigate(['/admin-panel']);
          this.userForm.reset();
        },
        error: (err) => alert(err.error.message),
      });
    }

    if (this.currentRoute() === '/area-privada') {
      this.adminClientes.loginCliente(userData).subscribe({
        next: (response) => {
          localStorage.setItem('userStored', JSON.stringify(response));
          this.router.navigate(['/area-privada', `${response.user.id}`]);
          this.userForm.reset();
        },
        error: (err) => alert(err.error.message),
      });
    }
  }
}
