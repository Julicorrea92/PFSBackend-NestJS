import { Integrante } from "./Integrante";
import { Marca } from "./Marca";
import * as FS from 'fs';


export class Deportista extends Integrante {

//Atributos de clase

    private capitan: boolean;
    private marca: Marca[];

//Constructores

    public constructor(credencial: string, apellidoNombres: string, fechaNacimiento: string,
        paisNacimiento: string, deporte: string, rol: string, capitan: boolean, marca: Marca[]) {

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

    mostrar() {

        
    }

    guardar() {
        
    }


//CRUD

newMarca(): string{
    return 'Marca creada';
}


getMarca(): string{
    return "Lista de Marcas";    
}



updateMarca(): string{
    return 'Datos actualizados';
}


deleteMarca(): string{
    return 'Registro eliminado'
}

}