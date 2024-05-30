import { Inject, Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { factura } from '../models/factura.model';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private baseUrl = 'https://localhost:7285/api/factura'; // OJO - Debe ser de acuerdo al puerto que estén utilizando en sus máquinas

  constructor(
    //@Inject(HttpClient) private http: HttpClient,
     private http: HttpClient
  ) { }

  // LEER LOS ELEMENTOS DESDE BD

   // Método para cargar facturas desde el servidor
   cargarFacturas(): Observable<factura[]> {
    return this.http.get<factura[]>(this.baseUrl);
  }

  // NUEVO

}