import { Integrante } from "./Integrante";
import { Marca } from "./Marca";

export class Deportista extends Integrante {

//Atributos de clase

    public capitan: boolean;
    public marca: Marca[];


//Constructores

    public constructor(credencial: string, apellidoNombres: string, fechaNacimiento: string,
        paisNacimiento: string, deporte: string, rol: string, capitan: boolean, marca: []) {

        super(credencial, apellidoNombres, fechaNacimiento, paisNacimiento, deporte, rol)

        this.capitan = capitan;
        this.marca = marca;

    }
    
//Setters y getters

    public esCapitan(): boolean {
        return this.capitan;
    }

    public setCapitan(): void {
        this.capitan = !this.capitan;
    }

    public getMarcas(): Marca[] {
        return this.marca;
    }

    public setMarcas(newMarca: Marca[]): void {
        this.marca = newMarca;
    }


}



