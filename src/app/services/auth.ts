import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AccountData } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  public API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  public tokenValidity(token: string) {
    return this.http.post(`${this.API_URL}/auth/verificar-token`, { token });
  }
  public activateAccount(accountData: AccountData) {
    return this.http.patch<any>(`${this.API_URL}/auth/activar-cuenta`, accountData);
  }

  public resendActivationEmail(email: string) {
    console.log(email);
    return this.http.post<any>(`${this.API_URL}/auth/reenviar-email`, { email });
  }
}
