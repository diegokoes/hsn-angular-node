import { Component } from '@angular/core';

@Component({
  selector: 'app-footer1-info',
  imports: [],
  templateUrl: './footer1-info.html',
  styleUrl: './footer1-info.css',
})
export class Footer1Info {
  items: Object[] = [
    {
      img: 'https://www.hsnstore.com/skin/frontend/base/default/images/footer/Entrega.svg',
      alt: 'Icono de una mano abierta con la palma hacia arriba sujetando un paquete',
      titulo: 'Envíos gratis y rápidos',
      texto: 'Envío rapidísimo en 24/48 horas y gratis a partir de 29,99€',
    },
    {
      img: 'https://www.hsnstore.com/skin/frontend/base/default/images/footer/Garantia.svg',
      alt: 'Icono de una mano con el pulgar hacia arriba dentro de un escudo',
      titulo: 'Máxima calidad',
      texto: 'Desarrollado por nuestro equipo de I+D+I y fabricado en nuestra propia fábrica',
    },
    {
      img: 'https://www.hsnstore.com/skin/frontend/base/default/images/footer/Medioambiente.svg',
      alt: 'Icono de unas manos rodeando a la tierra',
      titulo: 'Sostenibilidad',
      texto:
        'Mejoramos progresivamente los procesos existentes para reducir nuestra huella medioambiental',
    },
    {
      img: 'https://www.hsnstore.com/skin/frontend/base/default/images/footer/Materias.svg',
      alt: 'Icono de un papel desenrollado con una insignia encima representando un OK',
      titulo: 'Materias Primas Premium',
      texto:
        'Utilizamos las mejores materias primas probadas y reconocidas por certificados de calidad',
    },
  ];
}
