abstract class Integrante {

    //Atributos de clase

    protected credencial: string;
    protected apellidoNombres: string;
    protected fechaNacimiento: string;
    protected paisNacimiento: string;
    protected deporte: string;
    protected rol: string;

    //Constructores

    public constructor() { }


    //getters & setters

    public setCredencial(credencial: string): void { this.credencial = credencial };
    public getCredencial(): string { return this.credencial };

    public setApellidoNombres(apellidoNombres: string): void { this.apellidoNombres = apellidoNombres };
    public getApellidoNombres(): string { return this.apellidoNombres };

    public setFechaNacimient(fechaNacimiento: string): void { this.fechaNacimiento = fechaNacimiento };
    public getFechaNacimiento(): string { return this.fechaNacimiento };

    public setPaisNacimiento(paisNacimiento: string) { this.paisNacimiento = paisNacimiento };
    public getPaisNacimiento(): string { return this.paisNacimiento };

    public setDeporte(deporte: string): void { this.deporte = deporte };
    public getDeporte(): string { return this.deporte };

    public setRol(rol: string): void { this.rol = rol };
    public getRol(): string { return this.rol };

}
