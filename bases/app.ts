// Crear interfaces
interface Ibatimovil {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Ibatimovil = batimovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Ibatimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Iguason {
  reir: boolean;
  comer: boolean;
  llorar: boolean;
}

const guason: Iguason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Iguason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface IciudadGotica {
  ( ciudadanos: string[] ): number;
}

const ciudadGotica: IciudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}


// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface Iciudadano {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Iciudadano {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;

  imprimirBio() {
    console.log(`
      Me llamo ${ this.nombre }, tengo ${ this.edad },
      soy ${ this.sexo } y mi estado civil es ${ this.estadoCivil }`);
  }

}