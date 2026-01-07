import { Component, OnInit } from '@angular/core';
import { AdminAdmins } from '../../../services/admin-admins';
import { MatTableModule } from '@angular/material/table';
import { IconButton } from '../../../shared/icon-button/icon-button';
import { DatePipe } from '../../../pipes/date-pipe';
import { NuevoAdmin } from './nuevo-admin/nuevo-admin/nuevo-admin';
import { Spinner } from '../../../shared/spinner/spinner';
import { EditDeleteButtons } from '../../../shared/edit-delete-buttons/edit-delete-buttons';

@Component({
  selector: 'app-admins',
  imports: [MatTableModule, EditDeleteButtons, DatePipe, NuevoAdmin, Spinner],
  templateUrl: './admins.html',
  styleUrl: './admins.css',
})
export class Admins implements OnInit {
  public displayedColumns = ['rol', 'email', 'date', 'active', 'edition'];

  constructor(public adminAdmins: AdminAdmins) {}

  ngOnInit() {
    this.adminAdmins.getAdmins$().subscribe();
  }

  public deleteAdmin(adminId: string) {
    this.adminAdmins.deregisterAdmin$(adminId).subscribe({
      next: () => alert('Administrador eliminado.'),
      error: (message) => alert(message),
    });
  }
}
