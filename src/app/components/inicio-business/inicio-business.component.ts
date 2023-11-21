import { Component } from '@angular/core';
import {BusinessService} from "../../services/business.service";
import {CreateDialogComponent} from "./create-dialog/create-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {EditBusinessDialogComponent} from "./edit-business-dialog/edit-business-dialog.component";

@Component({
  selector: 'app-inicio-business',
  templateUrl: './inicio-business.component.html',
  styleUrls: ['./inicio-business.component.css']
})
export class InicioBusinessComponent {
  filters: any = {
    global: { value: null},
    search: "Ingresa el nombre de la empresa"
  }

  area: boolean=false;
  ubicacion: boolean=false;
  salario: boolean=false;
  empresa: boolean=true;

  ofertas: any;
  constructor(private businessService: BusinessService, public dialog: MatDialog) {
  }

  ngOnInit(){
    this.businessService.getBusiness().subscribe((data: any) => {
      this.ofertas = data;
    });
  }

  //POST
  openCreateDialog(valor:any): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '400px', // ajusta según sea necesario
      data: {
        valor: valor  // Aquí pasas tu parámetro valor al componente de diálogo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // result contendrá los datos enviados desde el cuadro de diálogo
      console.log('The dialog was closed', result);
    });
  }

  //UPDATE
  openEditBusinessDialog(valor:any, busines:any, pos:number): void {
    const dialogRef = this.dialog.open(EditBusinessDialogComponent, {
      width: '400px', // ajusta según sea necesario
      data: {
        valoor: valor,
        position: pos,
        business: busines// Aquí pasas tu parámetro valor al componente de diálogo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // result contendrá los datos enviados desde el cuadro de diálogo
      console.log('The dialog was closed', result);
    });
  }
  //DELTE
  onDeleteBusiness(idBusiness: number, pos: number): void {
    var newPostulaciones:any;

    for (var business of this.ofertas) {
      if(business.id == idBusiness){
        newPostulaciones = business.postulaciones;
        newPostulaciones.splice(pos, 1);
      }
    }

    this.ofertas[idBusiness-1].postulaciones = newPostulaciones;

    this.businessService.updateBusiness(idBusiness,this.ofertas[idBusiness-1]).subscribe(response=>{
      console.error('Empresa eliminada correctamente');
    }, error => {
      console.error('Error al eliminar la empresa', error);
    });
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

  onMore(data: any){

    for (const oferta of this.ofertas) {
      oferta.More=false;
    }
    data.More=true;
  }

  protected readonly open = open;
}
