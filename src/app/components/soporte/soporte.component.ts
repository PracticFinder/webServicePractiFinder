import { Component } from '@angular/core';
import {Postulacion} from "../mis-postulaciones/mis-postulaciones.component";

export interface PreguntaRespuesta {
  id: any;
  question: string;
  answer: string;
  cols?: number;
  rows?: number;
}
@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent {
  title = 'Preguntas Frecuentes';
  title2 = 'Contactos';
  email = 'practifinder@empresa.com.pe';
  phone = '425-5689-23';
  preguntasRespuestas = [] as any;
  preguntaRespuestaData!: PreguntaRespuesta;

  constructor() {
    this.preguntaRespuestaData = {} as PreguntaRespuesta;
  }

  ngOnInit(): void {
    this.getAllPreguntasRespuestas();
  }

  getAllPreguntasRespuestas() {
    const preguntaRespuesta1: PreguntaRespuesta = {
      id: 1,
      question: '¿Quiénes somos?',
      answer: 'PractiFinder es una empresa que busca brindar grandes oportunidades a estudiantes universitarios o recién egresados con el fin de que ganen experiencia laboral o puedan cumplir sus prácticas preprofesionales para poder graduarse.',
      cols: 4,
      rows: 1,
    };

    const preguntaRespuesta2: PreguntaRespuesta = {
      id: 2,
      question: '¿Cómo funciona?',
      answer: 'PractiFinder es una plataforma que permite a las empresas publicar sus ofertas de prácticas preprofesionales o profesionales, y a los estudiantes postular a ellas.',
      cols: 4,
      rows: 1
    }

    const preguntaRespuesta3: PreguntaRespuesta = {
      id: 3,
      question: '¿Cómo me registro?',
      answer: 'Para registrarte en PractiFinder, debes ingresar a la página web y hacer click en el botón “Registrarse”. Luego, debes llenar el formulario con tus datos personales y de contacto. Finalmente, debes hacer click en el botón “Registrarse” para completar el proceso.',
      cols: 4,
      rows: 1
    }

    const preguntaRespuesta4: PreguntaRespuesta = {
      id: 4,
      question: '¿Cómo postulo a una oferta?',
      answer: 'Para postular a una oferta, debes ingresar a la página web y hacer click en el botón “Iniciar Sesión”. Luego, debes ingresar tu correo electrónico y contraseña. Finalmente, debes hacer click en el botón “Iniciar Sesión” para completar el proceso.',
      cols: 4,
      rows: 1
    }

    const preguntaRespuesta5: PreguntaRespuesta = {
      id: 5,
      question: '¿Cómo me contacto con una empresa?',
      answer: 'Para contactarte con una empresa, debes ingresar a la página web y hacer click en el botón “Iniciar Sesión”. Luego, debes ingresar tu correo electrónico y contraseña. Finalmente, debes hacer click en el botón “Iniciar Sesión” para completar el proceso.',
      cols: 4,
      rows: 1
    }

    this.preguntasRespuestas.push(preguntaRespuesta1, preguntaRespuesta2, preguntaRespuesta3, preguntaRespuesta4, preguntaRespuesta5);
  }
}
