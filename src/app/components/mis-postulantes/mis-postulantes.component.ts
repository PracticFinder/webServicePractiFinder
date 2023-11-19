import { Component } from '@angular/core';
import {BusinessService} from "../../services/business.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mis-postulantes',
  templateUrl: './mis-postulantes.component.html',
  styleUrls: ['./mis-postulantes.component.css']
})
export class MisPostulantesComponent {
  filters: any = {
    global: { value: null},
    search: "Ingresa el nombre de la empresa"
  }

  area: boolean=false;
  ubicacion: boolean=false;
  salario: boolean=false;
  empresa: boolean=true;

  ofertas: any;
  constructor(private businessService: BusinessService, private router: Router) {
  }

  ngOnInit(){
    this.businessService.getBusiness().subscribe((data: any) => {
      this.ofertas = data;
    });
  }

  abrirDetalleOferta(data: any): void {
    this.router.navigate(['/step-one'], { state: { ofertaData: data } });
  }

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

}
