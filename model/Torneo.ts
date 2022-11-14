import { Delegacion } from "./delegacion";

export class Torneo {

    //Atributos de clase

    private sede: string;
    private edicion: number;
    private deporte: string;
    private tipo: string;
    private participantes: Delegacion[];

    //Constructores

    public constructor(sede: string, edicion: number, deporte: string, tipo: string, participantes: Delegacion[]) {

        this.sede = sede;
        this.edicion = edicion;
        this.deporte = deporte;
        this.tipo = tipo;
        this.participantes = participantes;
    }

    //Setters y getters

    public getSede(): string {
        return this.sede;
    }

    public setSede(newSede: string): void {
        this.sede = newSede;
    }

    public getEdicion(): number {
        return this.edicion;
    }

    public setEdicion(newEdicion: number): void {
        this.edicion = newEdicion;
    }

    public getDeporte(): string {
        return this.deporte;
    }

    public setDeporte(newDeporte: string): void {
        this.deporte = newDeporte;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(newTipo: string): void {
        this.tipo = newTipo;
    }

    public getParticipantes(): Delegacion[] {
        return this.participantes;
    }

    public setParticipantes(newParticipantes: Delegacion[]): void {
        this.participantes = newParticipantes;
    }

    public toString(): string {
        return `Torneo: {Sede: ${this.sede}. Edición: ${this.edicion}. Deporte: ${this.deporte}. Tipo: ${this.tipo}. Participantes: ${this.participantes}}`;
    }

}