export class Marca {

//Atributos de clase

    nombre: string;
    valor: string;

//Constructores

    public constructor(nombre: string, valor: string) {

        this.nombre = nombre;
        this.valor = valor;
    }

//Setters y getters

    public setNombre(newNombre: string): void {
        this.nombre = newNombre;
    }

    public getNombre(): string {
        return this.nombre;
    }


    public setValor(newValor: string): void {
        this.valor = newValor;
    }

    public getValor(): string {
        return this.valor;
    }


}











