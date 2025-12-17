import { Component, OnInit } from '@angular/core';
import { AdminClientesService } from '../../../services/admin-clientes';
import { IconButton } from '../../../shared/icon-button/icon-button';
import { binPath, pencilPath } from '../../../data/icon-paths';
import { NuevoCliente } from './components/nuevo-cliente/nuevo-cliente';

@Component({
  selector: 'app-admin-clientes',
  imports: [IconButton, NuevoCliente],
  templateUrl: './admin-clientes.html',
  styleUrl: './admin-clientes.css',
})
export class AdminClientes implements OnInit {
  public binPath = binPath;
  public pencilPath = pencilPath;

  public clientes = [
    {
      name: 'cliente abc',
      email: 'clienteabc@gmail.Component',
      cif: '60750299A',
      createdAt: '',
    },
    {
      name: 'cliente def',
      email: 'clientedef@gmail.Component',
      cif: '60750299B',
      createdAt: '',
    },
  ];

  constructor(public adminClientes: AdminClientesService) {}

  ngOnInit() {
    this.adminClientes.getClientes();
  }

  public deleteCliente(clienteId: string | undefined) {
    clienteId && this.adminClientes.deleteCliente(clienteId);
  }
}
