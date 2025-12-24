import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EMAIL_MESSAGES, FORM_MESSAGES, PASSWORD_MESSAGES } from '../data/messages';

@Injectable({
  providedIn: 'root',
})
export class FormError {
  resolveError(form: FormGroup, controlName: string): string | null {
    const control = form.get(controlName);
    if (!control || !control.touched || !control.errors) return null;
    if (control.errors['required']) return FORM_MESSAGES.REQUIRED;
    if (control.errors['email']) return EMAIL_MESSAGES.INVALID;
    if (control.errors['password']) return PASSWORD_MESSAGES.INVALID;
    if (control.errors['differentPasswords']) return PASSWORD_MESSAGES.UNMATCH;
    if (control.errors['existingEntry']) return FORM_MESSAGES.EXISTING;
    if (control.errors['nifNieCif']) {
      switch (control.errors['nifNieCif']) {
        case 'nif':
          return 'NIF inválido';
        case 'nie':
          return 'NIE inválido';
        case 'cif':
          return 'CIF inválido';
        case 'length':
          return 'El documento fiscal debe tener 9 caracteres';
        default:
          return 'Documento fiscal inválido';
      }
    }
    return null;
  }
}
