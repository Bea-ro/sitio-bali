import { Component, OnInit } from '@angular/core';
import { AdminDocuments } from '../../services/admin-documents';
import { ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-cliente',
  imports: [MatTabsModule],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css',
})
export class Cliente implements OnInit {
  constructor(public adminDocuments: AdminDocuments, private route: ActivatedRoute) {}
  //en el servicio poner un docPath para no exponer enlace api que está ahora en HTML
  public clienteId = '';
  public clienteName = '';

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.clienteId = params.get('id') ?? '';
      this.adminDocuments.getDocuments(this.clienteId);
    });
  }
}
