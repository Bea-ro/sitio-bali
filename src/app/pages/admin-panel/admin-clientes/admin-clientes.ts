import { Component, OnInit } from '@angular/core';
import { AdminClientesService } from '../../../services/admin-clientes';
import { IconButton } from '../../../shared/icon-button/icon-button';
import { binPath, pencilPath } from '../../../data/icon-paths';
import { NuevoCliente } from './components/nuevo-cliente/nuevo-cliente';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-admin-clientes',
  imports: [IconButton, NuevoCliente, MatTableModule],
  templateUrl: './admin-clientes.html',
  styleUrl: './admin-clientes.css',
})
export class AdminClientes implements OnInit {
  public binPath = binPath;
  public pencilPath = pencilPath;
  public displayedColumns = ['name', 'email', 'cif', 'date', 'edition'];

  constructor(public adminClientes: AdminClientesService) {}

  ngOnInit() {
    this.adminClientes.getClientes();
  }

  public deleteCliente(clienteId: string) {
    this.adminClientes.deleteCliente(clienteId);
  }
}
