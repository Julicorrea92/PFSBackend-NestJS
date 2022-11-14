import { Integrante } from "./Integrante";

export class Delegacion {

//Atributos de clase

    private pais: string;
    private deporte: string;
    private integrantes: Integrante[];

//Constructores

    public constructor(pais: string, deporte: string, integrantes: Integrante[]){
        this.pais= pais;
        this.deporte= deporte;
        this.integrantes= integrantes;
    }

//Setters y getters

public getPais(): string {
    return this.pais;
}

public setPais(newPais): void {
    this.pais = newPais;
}

public getDeporte(): string {
    return this.deporte;
}
public setDeporte(newDeporte): void {
    this.deporte = newDeporte;
}

public getIntegrantes(): Integrante[] {
    return this.integrantes;
}

/* public setIntegrantes(newIntegrante): Integrante[]{
    this.integrantes= newIntegrante;

}  REVISAR SI VA SETTER DE INTEGRANTE*/




}