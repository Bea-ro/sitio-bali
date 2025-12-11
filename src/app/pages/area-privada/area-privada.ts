import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Documento } from '../../models/models';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-area-privada',
  imports: [],
  templateUrl: './area-privada.html',
  styleUrl: './area-privada.css',
})
export class AreaPrivada {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  public documentos: Documento[] = [];

  public getDocs(cliente: string): Observable<Documento[]> {
    return this.http.get<Documento[]>(`http://192.168.1.140:3001/api/clientes/${cliente}`);
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const cliente = params.get('cliente') ?? '';

      this.getDocs(cliente).subscribe({
        next: (docs) => {
          this.documentos = docs;
        },
        error: (err) => console.error('Error cargando documentos:', err),
      });
    });
  }
}
