import { Component, OnInit } from '@angular/core';
import { binPath, pencilPath } from '../../../data/icon-paths';
import { AdminAdmins } from '../../../services/admin-admins';
import { MatTableModule } from '@angular/material/table';
import { IconButton } from '../../../shared/icon-button/icon-button';
import { DatePipe } from '../../../pipes/date-pipe';
import { NuevoAdmin } from './nuevo-admin/nuevo-admin/nuevo-admin';

@Component({
  selector: 'app-admins',
  imports: [MatTableModule, IconButton, DatePipe, NuevoAdmin],
  templateUrl: './admins.html',
  styleUrl: './admins.css',
})
export class Admins implements OnInit {
  public binPath = binPath;
  public pencilPath = pencilPath;
  public displayedColumns = ['rol', 'email', 'date', 'active', 'edition'];

  constructor(public adminAdmins: AdminAdmins) {}

  ngOnInit() {
    this.adminAdmins.getAdmins();
  }

  public deleteAdmin(adminId: string) {
    this.adminAdmins.deregisterAdmin(adminId);
  }
}
