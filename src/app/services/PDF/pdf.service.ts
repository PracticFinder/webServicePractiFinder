import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
@Injectable({
  providedIn: 'root'
})
export class PdfService {
  generatePdf(usuario: any) {

    let doc = new jsPDF();

    // Estilos
    const styles = {
      header: {
        fontSize: 22,
        fontStyle: 'bold',
        marginBottom: 10
      },
      subHeader: {
        fontSize: 16,
        fontStyle: 'bold',
        marginBottom: 5
      },
      sectionTitle: {
        fontSize: 18,
        fontStyle: 'bold',
        textDecoration: 'underline',
        marginBottom: 5
      },
      listItem: {
        marginLeft: 10,
        marginBottom: 3
      }
    };

    // Título
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.text('Currículum Vitae', 105, 15, { align: 'center' });

    if (usuario.imagen === null) {
      doc.text('No hay imagen', 25, 9);
    }else {
      const img = new Image();
      img.src = usuario.imagen;
      doc.addImage(img, 'PNG', 20, 25, 40, 40);
    }


    // Datos personales
    doc.setFont('helvetica');
    doc.setFontSize(12);
    doc.text(`Nombre: ${usuario.nombre}`, 70, 30);
    doc.text(`Edad: ${usuario.edad}`, 70, 40);
    doc.text(`Teléfono: ${usuario.telefono}`, 70, 50);
    doc.text(`Dirección: ${usuario.direccion}`, 70, 60);
    doc.text(`Correo: ${usuario.correo}`, 70, 70);
    let yPos = 90; // Posición inicial de Habilidades Técnicas

    if (usuario.habilidadesTecnicas && usuario.habilidadesTecnicas.length > 0) {
      doc.setFillColor(200, 200, 200);
      doc.setFont('bold');
      doc.rect(20, yPos, 170, 10, 'F');
      doc.setTextColor(0, 0, 0);
      yPos = yPos + 6;
      doc.text('Habilidades Técnicas', 25, yPos); // Ajusta la posición vertical del texto
      doc.setFont('normal');
      usuario.habilidadesTecnicas.forEach((habilidad: string, index: number) => {
        yPos = yPos + 8;
        doc.text(`- ${habilidad}`, 25, yPos);// Ajusta la posición vertical del texto
      });
    }else {
        doc.text('No se han especificado habilidades técnicas', 25, yPos);
      }
// Certificaciones
    if (usuario.certificaciones.length > 0) {
      yPos += 10; // Incrementa la posición vertical para la siguiente sección
    doc.setFillColor(200, 200, 200);
    doc.setFont('bold');
    doc.rect(20, yPos, 170, 10, 'F');
    doc.setTextColor(0, 0, 0);
    yPos= yPos + 6;
    doc.text('Certificaciones', 25, yPos); // Ajusta la posición vertical del texto
    doc.setFont('normal');
    usuario.certificaciones.forEach((certificacion: any, index: number) => {
      yPos= yPos + 8;
      doc.text(`- ${certificacion.nombre} en ${certificacion.nombreInstitucion} (${certificacion.fechaObtencion})`, 25, yPos); // Ajusta la posición vertical del texto
    });}else {
        doc.text('No se han especificado certificaciones', 25, yPos);
      }


// Experiencia Laboral
    if (usuario.experiencias.length > 0) {
    yPos += 10; // Incrementa la posición vertical para la siguiente sección
    doc.setFillColor(200, 200, 200);
    doc.setFont('bold');
    doc.rect(20, yPos, 170, 10, 'F');
    doc.setTextColor(0, 0, 0);
    yPos= yPos + 6;
    doc.text('Experiencia Laboral', 25, yPos); // Ajusta la posición vertical del texto
    doc.setFont('normal');
    const experiencia = usuario.experiencias[0];
    yPos= yPos + 8;
    doc.text(`Empresa: ${experiencia.empresa}`, 25, yPos);
    yPos= yPos + 6;
    doc.text(`Cargo: ${experiencia.cargo}`, 25, yPos);
    yPos= yPos + 6;
    doc.text(`Fechas: ${experiencia.fechaInicio} - ${experiencia.fechaFinalizacion}`, 25, yPos);
    yPos= yPos + 6;
    doc.text(`Descripción: ${experiencia.descripcion}`, 25, yPos);
    }else {
        doc.text('No se han especificado experiencias laborales', 25, yPos);
    }

// Idiomas
    if (  usuario.idiomas.length > 0) {
    yPos += 10; // Incrementa la posición vertical para la siguiente sección
    doc.setFillColor(200, 200, 200);
    doc.setFont('bold');
    doc.rect(20, yPos, 170, 10, 'F');
    doc.setTextColor(0, 0, 0);
    yPos= yPos + 6;
    doc.text('Idiomas', 25, yPos); // Ajusta la posición vertical del texto
    doc.setFont('normal');
    usuario.idiomas.forEach((idioma: any, index: number) => {
      yPos= yPos + 3;
      doc.text(`- ${idioma.idioma}: ${idioma.nivel}`, 25, yPos + 15 + (index * 7)); // Ajusta la posición vertical del texto
    });
    }else {
        doc.text('No se han especificado idiomas', 25, yPos);
    }


// Guardar o descargar el PDF
    doc.save('mi_cv.pdf');
  }
}
