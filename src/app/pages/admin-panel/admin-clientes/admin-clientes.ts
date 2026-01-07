import { Component, OnInit } from '@angular/core';
import { AdminClientesService } from '../../../services/admin-clientes';
import { NuevoCliente } from './components/nuevo-cliente/nuevo-cliente';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '../../../pipes/date-pipe';
import { Paginator } from '../../../shared/paginator/paginator';
import { Search } from '../../../shared/search/search';
import { EditDeleteButtons } from '../../../shared/edit-delete-buttons/edit-delete-buttons';
import { Spinner } from '../../../shared/spinner/spinner';

@Component({
  selector: 'app-admin-clientes',
  imports: [NuevoCliente, MatTableModule, DatePipe, Paginator, Search, EditDeleteButtons, Spinner],
  templateUrl: './admin-clientes.html',
  styleUrl: './admin-clientes.css',
})
export class AdminClientes implements OnInit {
  public displayedColumns = ['name', 'cif', 'email', 'date', 'active', 'edition'];
  public page: number = 0;
  public pageSize: number = 2;
  public filterText: string = '';

  constructor(public adminClientes: AdminClientesService) {}

  ngOnInit() {
    this.getClientes();
  }

  public getClientes() {
    this.adminClientes.getClientesPaginated$(this.page, this.pageSize, this.filterText).subscribe();
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
