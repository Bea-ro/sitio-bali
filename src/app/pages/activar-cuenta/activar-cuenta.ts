import { Component } from '@angular/core';
import { AccountActivation } from '../../shared/account-activation/account-activation';

@Component({
  selector: 'app-activar-cuenta',
  imports: [AccountActivation],
  templateUrl: './activar-cuenta.html',
  styleUrl: './activar-cuenta.css',
})
export class ActivarCuenta {}
