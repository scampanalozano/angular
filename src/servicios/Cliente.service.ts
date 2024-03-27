import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getClientes(filtro?: string, rows?: number, page?: number) {
    let body = new HttpParams();
    body = filtro ? body.set('filtro', filtro) : body
    body = rows ? body.set('rows', rows) : body
    body = page ? body.set('page', page) : body

    return this.http.get<Respuesta>(this.baseUrl + "clientes/", { params: body });

  }
  getCliente(codigo: string) {
    return this.http.get<Respuesta>(this.baseUrl + "cliente/" + codigo);

  }

  insertarCliente(cliente: Cliente) {
    return this.http.post<Respuesta>(this.baseUrl + "cliente/", cliente, this.httpOptions);

  }
  actualizarVehiculo(cliente: Cliente, codigo: String) {
    return this.http.put<Respuesta>(this.baseUrl + "cliente/" + codigo, cliente, this.httpOptions);
  }
  eliminarVehiculo(codigo: String) {
    return this.http.delete<Respuesta>(this.baseUrl + "cliente/" + codigo);
  }



}

export interface Cliente {
  id: number,
  nombre: string,
  apellido: string,
  password: string,
  telefono: string,
  email: string,
 
}

export interface Respuesta {
  codigo: string,
  mensaje: string,
  data: Array<Cliente> | Cliente | any;
  rows: number,
  pages: number,
  records: number,
  page: number


}