import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }
  addimg(nombre:any,foto:any){
    let datos= new FormData();
    datos.append('nombre',nombre);
    datos.append('imagen',foto);
    return this.http.post('http://3.147.81.57/api/persona',datos);
  }
}
