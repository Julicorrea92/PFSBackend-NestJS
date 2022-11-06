export abstract class Integrante {

    //Atributos de clase

    protected credencial: string;
    protected apellidoNombres: string;
    protected fechaNacimiento: string;
    protected paisNacimiento: string;
    protected deporte: string;
    protected rol: string;

    //Constructores

    public constructor(credencial: string, apellidoNombres: string, fechaNacimiento: string, paisNacimiento: string, deporte: string, rol: string) {

        this.credencial = credencial;
        this.apellidoNombres = apellidoNombres;
        this.fechaNacimiento = fechaNacimiento;
        this.paisNacimiento = paisNacimiento;
        this.deporte = deporte;
        this.rol = rol;

    }

    //getters & setters

    public setCredencial(newCredencial: string): void {
        this.credencial = newCredencial;
    };
    public getCredencial(): string {
        return this.credencial;
    };

    public setApellidoNombres(newApellidoNombres: string): void {
        this.apellidoNombres = newApellidoNombres;
    };
    public getApellidoNombres(): string {
        return this.apellidoNombres;
    };

    public setFechaNacimient(newFechaNacimiento: string): void {
        this.fechaNacimiento = newFechaNacimiento;
    };
    public getFechaNacimiento(): string {
        return this.fechaNacimiento;
    };

    public setPaisNacimiento(newPaisNacimiento: string) {
        this.paisNacimiento = newPaisNacimiento;
    };
    public getPaisNacimiento(): string {
        return this.paisNacimiento;
    };

    public setDeporte(newDeporte: string): void {
        this.deporte = newDeporte;
    };
    public getDeporte(): string {
        return this.deporte;
    };

    public setRol(newRol: string): void {
        this.rol = newRol;
    };
    public getRol(): string {
        return this.rol;
    };

}
