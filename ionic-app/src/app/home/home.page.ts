import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
    FormsModule,
  ], // se añade FormsModule
})
export class HomePage {
  // Variable para mostrar la fecha
  fecha: string;

  // Variable number
  numero: number = 10.567857894318;

  // Variable para el nombre
  nombre: string = '';
  nombreTemporal: string = '';

  //varible para contar de 2 en 2
  contador: number = 0;

  constructor() {
    // Establecer una fecha específica MM/DD/AAAA
    const fechaEspecifica = new Date('01/26/2024');
    this.fecha = fechaEspecifica.toLocaleDateString('en-US'); // Formato MM/DD/YYYY
  }

  // Función para manejar el clic en el botón
  ingresarNombre() {
    //establecer que la varible nombre ahora tenga el valor de la variable nombreTemporal
    this.nombre = this.nombreTemporal;
    console.log(this.nombre);
  }

  contarMasDos() {
    //sumar +2 a contador
    this.contador += 2;
  }
}
