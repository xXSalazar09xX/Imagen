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
    return this.http.post('http://127.0.0.1:8000/api/persona',datos);
  }
}
