
export class Postulante {
    nombre: string;
    imagen: string;
    edad: string;
    telefono: string;
    direccion: string;
    habilidades: {
      tecnicas: string[];
      interpersonales: string[];
      certificaciones: string[];
    };
    curso: string[];
    experiencias: {
      empresa: string;
      cargo: string;
      fechaInicio: string;
      fechaFinalizacion: string;
      descripcion: string;
    }[];
    idiomas: {
      nivel: string;
      idioma: string;
    }[];
    correo: string;
  
    constructor(data: any) {
      // Constructor para inicializar el modelo a partir de un objeto de datos
      this.nombre = data.nombre;
      this.imagen = data.imagen;
      this.edad = data.edad;
      this.telefono = data.telefono;
      this.direccion = data.direccion;
      this.habilidades = data.habilidades;
      this.curso = data.curso;
      this.experiencias = data.experiencias;
      this.idiomas = data.idiomas;
      this.correo = data.correo;
    }
  }
  