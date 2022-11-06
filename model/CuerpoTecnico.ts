import { Integrante } from "./Integrante";

export class CuerpoTecnico extends Integrante {

//Atributos de clase

    private capitan: boolean;

//Constructores

    public constructor(credencial: string, apellidoNombres: string, fechaNacimiento: string,
        paisNacimiento: string, deporte: string, rol: string, capitan: boolean) {

        super(credencial, apellidoNombres, fechaNacimiento, paisNacimiento, deporte, rol);

        this.capitan = capitan;
    }

//Setters y getters

    public esCapitan(): boolean {
        return this.capitan;
    }

    public setCapitan(): void {
        this.capitan = !this.capitan;
    }

}