import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  filters: any = {
    global: { value: null},
  }

  area: boolean=false;
  ubicacion: boolean=false;
  salario: boolean=false;
  empresa: boolean=true;

  ofertas: any = [
    {
      "UrlImage": 'https://tentulogo.com/wp-content/uploads/2017/08/ibm-logo.jpg',
    "Empresa": "International Business Machines",
    "Area": "Ingenieria",
    "Ubicacion": 'La Molina',
    "Salario": 1500,
    "Fecha": new Date(2023, 8, 10),
    "Status": 'aproved'
    },
    {
      "UrlImage": 'https://logowik.com/content/uploads/images/interbank1631.jpg',
      "Empresa": "Interbank",
      "Area": "Ingenieria",
      "Ubicacion": 'La Victoria',
      "Salario": 3000,
      "Fecha": new Date(2023, 10, 10),
      "Status": 'middle'
    },
    {
      "UrlImage": 'https://logovtor.com/wp-content/uploads/2020/03/banco-de-credito-del-peru-bcp-logo-vector.png',
      "Empresa": "Banco de Credito del Peru",
      "Area": "Ingenieria",
      "Ubicacion": 'San Isidro',
      "Salario": 1000,
      "Fecha": new Date(2023, 12, 1),
      "Status": 'failed'
    },
    {
      "UrlImage": 'http://2.bp.blogspot.com/-ChNKsuSHqhk/UifbgEHoZ0I/AAAAAAAAAE8/kU2JPfw9tp8/s1600/backus.jpg',
      "Empresa": "Backus AB InBev",
      "Area": "Ingenieria",
      "Ubicacion": 'Santa Anita',
      "Salario": 2130,
      "Fecha": new Date(2023, 11, 10),
      "Status": 'aproved'
    },
    {
      "UrlImage": 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Alicorp.svg',
      "Empresa": "Alicorp",
      "Area": "Ingenieria",
      "Ubicacion": 'Callao',
      "Salario": 3100,
      "Fecha": new Date(2023, 8, 20),
      "Status": 'aproved'
    },
    {
      "UrlImage": 'https://upload.wikimedia.org/wikipedia/commons/7/70/Logotipo_de_BBVA.svg',
      "Empresa": "Banco Bilbao Vizcaya Argentaria",
      "Area": "Ingenieria",
      "Ubicacion": 'San Isidro',
      "Salario": 2400,
      "Fecha": new Date(2023, 10, 20),
      "Status": 'aproved'
    },
    {
      "UrlImage": 'https://proactivo.com.pe/wp-content/uploads/2014/09/logo_FerreyrosCAT.jpg',
      "Empresa": "Ferreyros",
      "Area": "Ingenieria",
      "Ubicacion": 'San Isidro',
      "Salario": 1230,
      "Fecha": new Date(2023, 3, 10),
      "Status": 'failed'
    },
    {
      "UrlImage": 'https://orionscccom.files.wordpress.com/2021/11/d3173-nestlc3a9-logo.png',
      "Empresa": "Nestle",
      "Area": "Ingenieria",
      "Ubicacion": 'Callao',
      "Salario": 2350,
      "Fecha": new Date(2023, 2, 28),
      "Status": 'middle'
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
  }
  onUBICACION(){
    this.area=false;
    this.ubicacion=true;
    this.salario=false;
    this.empresa=false;
  }
  onSALARIO(){
    this.area=false;
    this.ubicacion=false;
    this.salario=true;
    this.empresa=false;
  }
  onEMPRESA(){
    this.area=false;
    this.ubicacion=false;
    this.salario=false;
    this.empresa=true;
  }
}
