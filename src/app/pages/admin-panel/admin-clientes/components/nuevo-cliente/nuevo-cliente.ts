import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { Cliente, ClienteForm } from '../../../../../models/models';
import { nifNieCifValidator } from './nif-nie-cif.validator';
import { AdminClientesService } from '../../../../../services/admin-clientes';

@Component({
  selector: 'app-nuevo-cliente',
  imports: [ReactiveFormsModule],
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
