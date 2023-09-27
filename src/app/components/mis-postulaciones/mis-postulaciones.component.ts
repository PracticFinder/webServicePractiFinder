import { Component, ViewChild } from '@angular/core';

export interface Postulacion {
  id: any;
  title: string;
  date: any;
  image: string;
  cols?: number;
  rows?: number;
}

@Component({
  selector: 'app-mis-postulaciones',
  templateUrl: './mis-postulaciones.component.html',
  styleUrls: ['./mis-postulaciones.component.css']
})

export class MisPostulacionesComponent {
  title = 'Mis Postulaciones';
  postulaciones = [] as any;
  postulacionData!: Postulacion;

  constructor() {
    this.postulacionData = {} as Postulacion;
  }

  ngOnInit(): void {
    this.getAllPostulaciones();
  }

  getAllPostulaciones() {
    const postulacion1: Postulacion = {
      id: 1,
      title: 'Postulación 1',
      date: new Date(),
      image: 'https://marketplace.canva.com/EAFAELFfY8o/1/0/1600w/canva-azul-y-violeta-informal-corporativo-desarrollo-de-aplicaci%C3%B3n-emprendimiento-empresa-logo-Olgzs4zIQXk.jpg',
      cols: 4,
      rows: 1,

    };

    const postulacion2: Postulacion = {
      id: 2,
      title: 'Postulación 2',
      date: new Date(),
      image: 'https://www.seoptimer.com/es/blog/wp-content/uploads/2016/04/GOOGLELOGO_1.jpg',
      cols: 4,
      rows: 1
    };

    const postulacion3: Postulacion = {
      id: 3,
      title: 'Postulación 3',
      date: new Date(),
      image: 'https://eserrano.com/wp-content/images/global-marketing-logo.png',
      cols: 4,
      rows: 1
    };

    const postulacion4: Postulacion = {
      id: 4,
      title: 'Postulación 4',
      date: new Date(),
      image: 'https://www.seoptimer.com/es/blog/wp-content/uploads/2016/04/Coca-Cola3.jpg',
      cols: 4,
      rows: 1
    };

    const postulacion5: Postulacion = {
      id: 5,
      title: 'Postulación 5',
      date: new Date(),
      image: 'https://www.seoptimer.com/es/blog/wp-content/uploads/2016/04/Logotipos-de-empresas-Buen-Logo.jpg',
      cols: 4,
      rows: 1
    };

    const postulacion6: Postulacion = {
      id: 6,
      title: 'Postulación 6',
      date: new Date(),
      image: 'https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Adidas.jpg',
      cols: 4,
      rows: 1
    };

    this.postulaciones.push(postulacion1, postulacion2, postulacion3, postulacion4, postulacion5, postulacion6);
  }

}
