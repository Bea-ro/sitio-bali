import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { ClienteForm } from '../../../../../models/models';
import { nifNieCifValidator } from './nif-nie-cif.validator';
import { existingEntryValidator } from '../../../../../validators/existing.validator';
import { AdminClientesService } from '../../../../../services/admin-clientes';
import { ErrorMessage } from '../../../../../shared/error-message/error-message';

@Component({
  selector: 'app-nuevo-cliente',
  imports: [ReactiveFormsModule, ErrorMessage],
  templateUrl: './nuevo-cliente.html',
  styleUrl: './nuevo-cliente.css',
})
export class NuevoCliente implements OnInit {
  public clienteFields!: FormGroup<ClienteForm>;

  constructor(public adminClientes: AdminClientesService) {}
  public ngOnInit() {
    this.clienteFields = new FormGroup<ClienteForm>({
      name: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
        asyncValidators: [
          existingEntryValidator(() => this.adminClientes.clientes(), 'name', 'existingEntry'),
        ],
      }),
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      cif: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, nifNieCifValidator()],
      }),
    });
  }

  public onSubmit() {
    const newCliente = this.clienteFields.getRawValue();
    console.log(newCliente);
    this.adminClientes.createCliente(newCliente);
    this.clienteFields.reset();
  }
}
