import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Documento } from '../../models/models';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-area-privada',
  imports: [],
  templateUrl: './area-privada.html',
  styleUrl: './area-privada.css',
})
export class AreaPrivada {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  public documentos: Documento[] = [];
  public API_URL = environment.API_URL;

  public getDocs(cliente: string): Observable<Documento[]> {
    return this.http.get<Documento[]>(`${this.API_URL}/clientes/${cliente}`);
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
