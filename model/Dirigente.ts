import { Integrante } from "./Integrante";


export class Dirigente extends Integrante {

//Atributos de clase
   
    private acceso: number;
    private jefe: boolean;

//Constructores

    public constructor(credencial: string, apellidoNombres: string, fechaNacimiento: string,
        paisNacimiento: string, deporte: string, rol: string, acceso: number, jefe: boolean) {

        super(credencial, apellidoNombres, fechaNacimiento, paisNacimiento, deporte, rol)

        this.acceso = acceso;
        this.jefe = jefe;
    }

//Setters y getters

    public getAcceso(): number {
        return this.acceso;
    }

    public setAcceso(nuevoAcceso): void {
        this.acceso = nuevoAcceso;
    }

    public esJefe(): boolean {
        return this.jefe;
    }

    public setJefe(): void {
        this.jefe = !this.jefe;
    }
}