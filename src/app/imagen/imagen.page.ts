import { Component } from '@angular/core';
import { ServicioService } from '../Servicio/servicio.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.page.html',
  styleUrls: ['./imagen.page.scss'],
})
export class ImagenPage {
  imagenes: any[] = [];
  imageUrls: (string | ArrayBuffer | null)[] = [];

  constructor(private serv: ServicioService) {}

  obtenerImagen(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.imagenes.push(file);

      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrls.push(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  storeimg(nombre: any) {
    this.imagenes.forEach((imagen, index) => {
      this.serv.addimg(nombre.value, imagen).subscribe({
        next: (data: any) => {
          debugger;
          console.log(data);
        },
        error: (error: any) => {
          debugger;
          console.error(error);
        },
      });
    });

    // Limpiar los campos después de guardar
    this.imagenes = [];
    this.imageUrls = [];
    nombre.value = '';
  }
}
