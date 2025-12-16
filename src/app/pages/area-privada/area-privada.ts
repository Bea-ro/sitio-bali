import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDocuments } from '../../services/admin-documents';

@Component({
  selector: 'app-area-privada',
  imports: [],
  templateUrl: './area-privada.html',
  styleUrl: './area-privada.css',
})
export class AreaPrivada {
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
