import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../Servicio/servicio.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.page.html',
  styleUrls: ['./imagen.page.scss'],
})
export class ImagenPage  {
  imagen:any;

  constructor(private serv:ServicioService) { }
  obtenerImagen(dato:any){
    this.imagen=dato.target.files[0];
  }
  storeimg(nombre:any){
    this.serv.addimg(nombre.value ,this.imagen).subscribe({
      next:(data:any)=>{
        debugger
        console.log(data)
        
      },
      error:(error:any)=>{
        debugger
        console.error(error)
      }
    })
  }

  

}
