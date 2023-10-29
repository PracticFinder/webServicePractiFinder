import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  filters: any = {
    global: { value: null},
    search: "Ingresa el nombre de la empresa"
  }

  area: boolean=false;
  ubicacion: boolean=false;
  salario: boolean=false;
  empresa: boolean=true;

  ofertas: any = [
    {
      "Titulo": "Jefe de sistemas",
      "Descripcion": "En la empresa se necesitan practicantees en el área de tecnología, deberá pasar por una serie de pruebas como ser entrevistado, rendir controles y medirse en una prueba de conocimiento. En la empresa se necesitan practicantees en el área de tecnología, deberá pasar por una serie de pruebas como ser entrevistado, rendir controles y medirse en una prueba de conocimiento.",
      "Fecha_inicio": "20-09-2023",
      "Fecha_fin": "30-09-2023",
      "Requisitos": "1. Tener habilidades en Figma\n2. Conociminetos básticos en Excel\n3. Disposición de horario flexible",
      "Funciones":"1. Comandar un equipo pequeño\n2. Brindar apoyo en el área de tecnología\n3. Organizar tareas del equipo1. Comandar un equipo pequeño",
      "Beneficios":"1. Salario: 1500 soles\n2. Seguro de Salud",
      "More": false,
      "UrlImage": 'https://tentulogo.com/wp-content/uploads/2017/08/ibm-logo.jpg',
      "Empresa": "International Business Machines",
      "Area": "Ingenieria",
      "Ubicacion": 'La Molina',
      "Salario": 1500
    },
    {
      "Titulo": "Jefe de sistemas",
      "Descripcion": "En la empresa se necesitan practicantees en el área de tecnología, deberá pasar por una serie de pruebas como ser entrevistado, rendir controles y medirse en una prueba de conocimiento",
      "Fecha_inicio": "20-09-2023",
      "Fecha_fin": "30-09-2023",
      "Requisitos": "1. Tener habilidades en Figma\n2. Conociminetos básticos en Excel\n3. Disposición de horario flexible",
      "Funciones":"1. Comandar un equipo pequeño\n2. Brindar apoyo en el área de tecnología\n3. Organizar tareas del equipo",
      "Beneficios":"1. Salario: 3000 soles\n2. Seguro de Salud",
      "More": false,
      "UrlImage": 'https://logowik.com/content/uploads/images/interbank1631.jpg',
      "Empresa": "Interbank",
      "Area": "Ingenieria",
      "Ubicacion": 'La Victoria',
      "Salario": 3000
    },
    {
      "Titulo": "Jefe de sistemas",
      "Descripcion": "En la empresa se necesitan practicantees en el área de tecnología, deberá pasar por una serie de pruebas como ser entrevistado, rendir controles y medirse en una prueba de conocimiento",
      "Fecha_inicio": "20-09-2023",
      "Fecha_fin": "30-09-2023",
      "Requisitos": "1. Tener habilidades en Figma\n2. Conociminetos básticos en Excel\n3. Disposición de horario flexible",
      "Funciones":"1. Comandar un equipo pequeño\n2. Brindar apoyo en el área de tecnología\n3. Organizar tareas del equipo",
      "Beneficios":"1. Salario: 1000 soles\n2. Seguro de Salud",
      "More": false,
      "UrlImage": 'https://logovtor.com/wp-content/uploads/2020/03/banco-de-credito-del-peru-bcp-logo-vector.png',
      "Empresa": "Banco de Credito del Peru",
      "Area": "Ingenieria",
      "Ubicacion": 'San Isidro',
      "Salario": 1000
    },
    {
      "Titulo": "Jefe de sistemas",
      "Descripcion": "En la empresa se necesitan practicantees en el área de tecnología, deberá pasar por una serie de pruebas como ser entrevistado, rendir controles y medirse en una prueba de conocimiento",
      "Fecha_inicio": "20-09-2023",
      "Fecha_fin": "30-09-2023",
      "Requisitos": "1. Tener habilidades en Figma\n2. Conociminetos básticos en Excel\n3. Disposición de horario flexible",
      "Funciones":"1. Comandar un equipo pequeño\n2. Brindar apoyo en el área de tecnología\n3. Organizar tareas del equipo",
      "Beneficios":"1. Salario: 2130 soles\n2. Seguro de Salud",
      "More": false,
      "UrlImage": 'http://2.bp.blogspot.com/-ChNKsuSHqhk/UifbgEHoZ0I/AAAAAAAAAE8/kU2JPfw9tp8/s1600/backus.jpg',
      "Empresa": "Backus AB InBev",
      "Area": "Ingenieria",
      "Ubicacion": 'Santa Anita',
      "Salario": 2130
    },
    {
      "Titulo": "Jefe de sistemas",
      "Descripcion": "En la empresa se necesitan practicantees en el área de tecnología, deberá pasar por una serie de pruebas como ser entrevistado, rendir controles y medirse en una prueba de conocimiento",
      "Fecha_inicio": "20-09-2023",
      "Fecha_fin": "30-09-2023",
      "Requisitos": "1. Tener habilidades en Figma\n2. Conociminetos básticos en Excel\n3. Disposición de horario flexible",
      "Funciones":"1. Comandar un equipo pequeño\n2. Brindar apoyo en el área de tecnología\n3. Organizar tareas del equipo",
      "Beneficios":"1. Salario: 3100 soles\n2. Seguro de Salud",
      "More": false,
      "UrlImage": 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Alicorp.svg',
      "Empresa": "Alicorp",
      "Area": "Ingenieria",
      "Ubicacion": 'Callao',
      "Salario": 3100
    },
    {
      "Titulo": "Jefe de sistemas",
      "Descripcion": "En la empresa se necesitan practicantees en el área de tecnología, deberá pasar por una serie de pruebas como ser entrevistado, rendir controles y medirse en una prueba de conocimiento",
      "Fecha_inicio": "20-09-2023",
      "Fecha_fin": "30-09-2023",
      "Requisitos": "1. Tener habilidades en Figma\n2. Conociminetos básticos en Excel\n3. Disposición de horario flexible",
      "Funciones":"1. Comandar un equipo pequeño\n2. Brindar apoyo en el área de tecnología\n3. Organizar tareas del equipo",
      "Beneficios":"1. Salario: 2400 soles\n2. Seguro de Salud",
      "More": false,
      "UrlImage": 'https://upload.wikimedia.org/wikipedia/commons/7/70/Logotipo_de_BBVA.svg',
      "Empresa": "Banco Bilbao Vizcaya Argentaria",
      "Area": "Ingenieria",
      "Ubicacion": 'San Isidro',
      "Salario": 2400
    },
    {
      "Titulo": "Jefe de sistemas",
      "Descripcion": "En la empresa se necesitan practicantees en el área de tecnología, deberá pasar por una serie de pruebas como ser entrevistado, rendir controles y medirse en una prueba de conocimiento",
      "Fecha_inicio": "20-09-2023",
      "Fecha_fin": "30-09-2023",
      "Requisitos": "1. Tener habilidades en Figma\n2. Conociminetos básticos en Excel\n3. Disposición de horario flexible",
      "Funciones":"1. Comandar un equipo pequeño\n2. Brindar apoyo en el área de tecnología\n3. Organizar tareas del equipo",
      "Beneficios":"1. Salario: 1230 soles\n2. Seguro de Salud",
      "More": false,
      "UrlImage": 'https://proactivo.com.pe/wp-content/uploads/2014/09/logo_FerreyrosCAT.jpg',
      "Empresa": "Ferreyros",
      "Area": "Ingenieria",
      "Ubicacion": 'San Isidro',
      "Salario": 1230
    },
    {
      "Titulo": "Jefe de sistemas",
      "Descripcion": "En la empresa se necesitan practicantees en el área de tecnología, deberá pasar por una serie de pruebas como ser entrevistado, rendir controles y medirse en una prueba de conocimiento",
      "Fecha_inicio": "20-09-2023",
      "Fecha_fin": "30-09-2023",
      "Requisitos": "1. Tener habilidades en Figma\n2. Conociminetos básticos en Excel\n3. Disposición de horario flexible",
      "Funciones":"1. Comandar un equipo pequeño\n2. Brindar apoyo en el área de tecnología\n3. Organizar tareas del equipo",
      "Beneficios":"1. Salario: 2350 soles\n2. Seguro de Salud",
      "More": false,
      "UrlImage": 'https://orionscccom.files.wordpress.com/2021/11/d3173-nestlc3a9-logo.png',
      "Empresa": "Nestle",
      "Area": "Ingenieria",
      "Ubicacion": 'Callao',
      "Salario": 2350
    }
  ]

  matchesFilter(name_a: string,name_u: string,name_s: number,name_e: string) {
    let miVariable: string = '';
    if(this.area){
      miVariable=name_a;
    }
    if(this.ubicacion){
      miVariable=name_u;
    }
    if(this.salario){
      miVariable=name_s.toString();
    }
    if(this.empresa){
      miVariable=name_e;
    }

    const filterValue = this.filters.global.value;
    if (!filterValue) {
      return true;  // Mostrar todos si no hay filtro
    }
    // Convierte a minúsculas para hacer la comparación sin importar mayúsculas/minúsculas
    return miVariable.toLowerCase().includes(filterValue.toLowerCase());
  }

  onAREA(){
    this.area=true;
    this.ubicacion=false;
    this.salario=false;
    this.empresa=false;
    this.filters.search= "Ingresa el area";
  }
  onUBICACION(){
    this.area=false;
    this.ubicacion=true;
    this.salario=false;
    this.empresa=false;
    this.filters.search= "Ingresa la ubicacion";
  }
  onSALARIO(){
    this.area=false;
    this.ubicacion=false;
    this.salario=true;
    this.empresa=false;
    this.filters.search= "Ingresa el salario";
  }
  onEMPRESA(){
    this.area=false;
    this.ubicacion=false;
    this.salario=false;
    this.empresa=true;
    this.filters.search= "Ingresa el nombre de la empresa";
  }

  onMore(data: any){

    for (const oferta of this.ofertas) {
      oferta.More=false;
    }
    data.More=true;
  }
}
