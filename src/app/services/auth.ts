import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AccountData, Admin } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  public API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  public tokenValidity(token: string) {
    return this.http.post(
      `${this.API_URL}/auth/verificar-token`,
      { token },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
  public activateAccount(accountData: AccountData) {
    return this.http
      .patch<Admin>(`${this.API_URL}/auth/activar-cuenta`, accountData, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (response) => {
          alert('Cuenta activada.');
        },
        (error) => {
          console.log(error);
          alert('Se ha producido un error al activar la cuenta. Por favor, inténtalo más tarde.');
        }
      );
  }
}
