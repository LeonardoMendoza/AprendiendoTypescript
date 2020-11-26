import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  VariableCualquiera: string;
  Dibanhi: string;
  Cosa1: string;
  Cosa2: string;
  Cosa3: string;   
  /*
    alert("xd")
    console.log("xd");
   */
  uwu(){
    alert("Ingrese1:" + this.VariableCualquiera + "\nIngrese2: " + this.Dibanhi + 
    "\nIngrese3:"+ this.Cosa1 + "\nIngrese4: " + this.Cosa2 + "\nIngrese5: " + this.Cosa3);
  }
  
  constructor() {}
  


/*
Memes=[
  {
    nombre: 'El primero XD',
    image: 'assets/Images/1.jpg'
  },{
    nombre: 'El segundoorl',
    image: 'assets/Images/2.jpg'
  },{
    nombre: 'El Terceor',
    image: 'assets/Images/3.jpg'
  },{
    nombre: 'El 4 ',
    image: 'assets/Images/4.jpg'
  }

]

pruebaFunciones(){
  alert("OwO");
}
imagenDesc(nombre: string){
  alert("El nombre de la imagen es: " + nombre);
}
*/

}
