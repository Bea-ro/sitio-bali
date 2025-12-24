import { Component, Input } from '@angular/core';
import { FormError } from '../../services/form-error';
import { FormGroup } from '@angular/forms';
import { ClienteForm } from '../../models/models';

@Component({
  selector: 'app-error-message',
  imports: [],
  templateUrl: './error-message.html',
  styleUrl: './error-message.css',
})
export class ErrorMessage {
  @Input() formFields!: FormGroup;
  @Input() control!: string;

  constructor(private formError: FormError) {}
  get error(): string | null {
    return this.formError.resolveError(this.formFields, this.control);
  }
}
