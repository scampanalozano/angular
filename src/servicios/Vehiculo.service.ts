import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})


export class VehiculosService {
  constructor(private http: HttpClient) { }
  baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getVehiculos(filtro?: string, rows?: number, page?: number) {
    let body = new HttpParams();
    body = filtro ? body.set('filtro', filtro) : body
    body = rows ? body.set('rows', rows) : body
    body = page ? body.set('page', page) : body

    return this.http.get<Respuesta>(this.baseUrl + "vehiculos/", { params: body });

  }

  getVehiculo(codigo: string) {
    return this.http.get<Respuesta>(this.baseUrl + "vehiculo/" + codigo);

  }

  insertarVehiculo(vehiculo: Vehiculo) {
    return this.http.post<Respuesta>(this.baseUrl + "vehiculo/", vehiculo, this.httpOptions);

  }
  actualizarVehiculo(vehiculo: Vehiculo, codigo: String) {
    return this.http.put<Respuesta>(this.baseUrl + "vehiculo/" + codigo, vehiculo, this.httpOptions);
  }
  eliminarVehiculo(codigo: String) {
    return this.http.delete<Respuesta>(this.baseUrl + "vehiculo/" + codigo);
  }






}


export interface Vehiculo {
  codigo: string,
  marca: string,
  color: string,
  modelo: string,
  kilometraje: string,
  precio: number,
  foto: string | null,
  anio: string,
  calificacion: number
}

export interface Respuesta {
  codigo: string,
  mensaje: string,
  data: Array<Vehiculo> | Vehiculo | any;
  rows: number,
  pages: number,
  records: number,
  page: number


}

