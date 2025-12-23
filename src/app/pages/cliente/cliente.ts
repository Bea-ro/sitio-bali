import { Component, OnInit } from '@angular/core';
import { AdminDocuments } from '../../services/admin-documents';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  imports: [],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css',
})
export class Cliente implements OnInit {
  constructor(public adminDocuments: AdminDocuments, private route: ActivatedRoute) {}
  //en el servicio poner un docPath para no exponer enlace api que está ahora en HTML de area-privada
  public docPath: string = '';

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const cliente = params.get('cliente') ?? '';
      this.adminDocuments.getDocuments(cliente);
    });
  }
}
