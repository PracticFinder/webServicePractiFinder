import {Component, OnInit, ViewChild} from '@angular/core';
import {BusinessService} from "../../services/business.service";
import {UserService} from "../../services/User/user.service";

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

export class MisPostulacionesComponent implements OnInit{
  title = 'Mis Postulaciones';
  postulaciones = [] as any;
  postulacionData!: Postulacion;

  usuario:any;
  business:any;

  constructor(private businessService:BusinessService, private userService: UserService) {
    this.postulacionData = {} as Postulacion;
  }

  ngOnInit(): void {
    this.getAllBusiness();
  }

  getAllPostulaciones() {

    this.getAddedPostulaciones();

    // for (var Business of this.business) {
    //   for (var postulacion of Business.postulaciones) {
    //     for (var postulante of postulacion.postulantes) {
    //       if(5 == 5){
    //         const miPostulacion = {
    //           Empresa: Business.Empresa,
    //           UrlImage: Business.UrlImage,
    //           Descripcion: postulacion.Descripcion,
    //           Fecha_inicio: postulacion.Fecha_inicio,
    //           Fecha_fin: postulacion.Fecha_fin,
    //           id: 7,
    //           title: 'Postulación 7',
    //           date: new Date(),
    //           image: 'https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Adidas.jpg',
    //           cols: 4,
    //           rows: 1,
    //         };
    //
    //         this.postulaciones.push(miPostulacion);
    //       }
    //     }
    //   }
    // }

  }

  getAllBusiness(){
    this.businessService.getBusiness().subscribe((data: any) => {
      this.business = data;
      this.getUser();
    });
  }
  getUser(){
    
      this.usuario = localStorage.getItem('usuario');

  }

  getAddedPostulaciones(){

     for (var Business of this.business) {
       for (var postulacion of Business.postulaciones) {
         for (var postulante of postulacion.postulantes) {
           if(this.usuario.nombre == postulante.nombre && this.usuario.correo == postulante.correo){
             const miPostulacion = {
               Empresa: Business.Empresa,
               UrlImage: Business.UrlImage,
               Descripcion: postulacion.Descripcion,
               Fecha_inicio: postulacion.Fecha_inicio,
               Fecha_fin: postulacion.Fecha_fin,
               id: 7,
               title: 'Postulación 7',
               date: new Date(),
               image: 'https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Adidas.jpg',
               cols: 4,
               rows: 1,
             };

             this.postulaciones.push(miPostulacion);
           }
         }
       }
     }

  }
}
