import { Component, OnInit } from '@angular/core';
import { AdminClientesService } from '../../../services/admin-clientes';
import { NuevoCliente } from './components/nuevo-cliente/nuevo-cliente';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '../../../pipes/date-pipe';
import { Paginator } from '../../../shared/paginator/paginator';
import { Search } from '../../../shared/search/search';
import { EditDeleteButtons } from '../../../shared/edit-delete-buttons/edit-delete-buttons';
import { Spinner } from '../../../shared/spinner/spinner';
import { Cliente, ClienteForm } from '../../../models/models';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { existingEntryValidator } from '../../../validators/existing.validator';
import { nifNieCifValidator } from './components/nuevo-cliente/nif-nie-cif.validator';
import { AcceptCancelButtons } from '../../../shared/accept-cancel-buttons/accept-cancel-buttons';
import { IconButton } from '../../../shared/icon-button/icon-button';
import { acceptPath, cancelPath } from '../../../data/icon-paths';

@Component({
  selector: 'app-admin-clientes',
  imports: [
    NuevoCliente,
    MatTableModule,
    DatePipe,
    Paginator,
    Search,
    EditDeleteButtons,
    Spinner,
    ReactiveFormsModule,
    IconButton,
  ],
  templateUrl: './admin-clientes.html',
  styleUrl: './admin-clientes.css',
})
export class AdminClientes implements OnInit {
  public displayedColumns = ['name', 'cif', 'email', 'date', 'active', 'edition'];
  public page: number = 0;
  public pageSize: number = 2;
  public filterText: string = '';
  public editingClienteId: string = '';
  public editingClienteFields!: FormGroup<ClienteForm>;

  public acceptPath: string = acceptPath;
  public cancelPath: string = cancelPath;

  constructor(public adminClientes: AdminClientesService) {}

  ngOnInit() {
    this.getClientes();
  }

  public getClientes() {
    this.adminClientes.getClientesPaginated$(this.page, this.pageSize, this.filterText).subscribe();
  }

  public editCliente(cliente: Cliente) {
    if (cliente._id) {
      this.editingClienteId = cliente._id;
      this.editingClienteFields = new FormGroup<ClienteForm>({
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
      this.editingClienteFields.patchValue({
        name: cliente.name,
        email: cliente.email,
        cif: cliente.cif,
      });
    }
  }

  public save() {
    const editedCliente = this.editingClienteFields.getRawValue();
    this.adminClientes.updateCliente$(this.editingClienteId, editedCliente).subscribe({
      next: () => alert('Cliente actualizado.'),
      error: (message) => alert(message),
    });
    this.editingClienteFields.reset();
    this.editingClienteId = '';
  }

  public cancel() {
    this.editingClienteFields.reset();
    this.editingClienteId = '';
  }

  public deleteCliente(clienteId: string) {
    this.adminClientes.deregisterCliente$(clienteId).subscribe({
      next: () => alert('Cliente borrado.'),
      error: (message) => alert(message),
    });
  }

  get totalItems() {
    return this.adminClientes.totalClientes();
  }

  public onPageChange(event: { page: number; pageSize: number }) {
    this.page = event.page;
    this.pageSize = event.pageSize;
    this.getClientes();
  }

  public onInputChange(event: { filter: string }) {
    this.page = 0;
    this.filterText = event.filter;
    this.getClientes();
  }
}
