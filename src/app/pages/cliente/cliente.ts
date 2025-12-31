import { Component, OnInit } from '@angular/core';
import { AdminDocuments } from '../../services/admin-documents';
import { ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { FileNamePipe } from '../../pipes/file-name-pipe';
import { downloadPath } from '../../data/icon-paths';

@Component({
  selector: 'app-cliente',
  imports: [MatTabsModule, FileNamePipe],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css',
})
export class Cliente implements OnInit {
  constructor(public adminDocuments: AdminDocuments, private route: ActivatedRoute) {}

  public clienteId: string = '';
  public downloadPath: string = downloadPath;
  public clienteName = '';

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.clienteId = params.get('id') ?? '';
      this.adminDocuments.getDocuments(this.clienteId);
    });
  }

  public openDocument(filePath: string) {
    console.log(this.clienteId, filePath);
    this.adminDocuments.getDocument(this.clienteId, filePath);
  }
}
