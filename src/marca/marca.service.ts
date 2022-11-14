import { Injectable } from '@nestjs/common';
import { Marca } from 'model/Marca';
import * as fs from 'fs';


@Injectable()
export class MarcaService {

    private listaMarcas: Marca[] = [];

    constructor() {
        this.loadMarcas()
    }

    public getMarcas(): Marca[]{
        return this.listaMarcas;
    }

    public getMarca(registro: string){
        
        if(registro){
            for (let i = 0; i < this.listaMarcas.length; i++){
                if (registro == this.listaMarcas[i].getNombre()){
                    return this.listaMarcas[i];
                }
            }
        }
    }

    public createMarca(marca: any): string{
       

        return 
    }
    

    











    //Leer marcas. Ver como agregar otras estadisticas de deportes, por ahora solo Basquet.

    private loadMarcas(): void {

        let marca: Marca;

        let archivo: string = fs.readFileSync('datos/Marcas.txt', 'utf8');

        if (archivo) {
            this.listaMarcas = [];

            let datos = archivo.split('\n')
                .map(p => p.replace('\r', ''))
                .map(p => p.split(','));

            for (let i = 0; i < datos.length; i++) {
                let dato = datos[i];

                for (let l = 0; l < dato.length; l++) {
                    let nuevaMarca = dato[l].split(',');
                    marca = new Marca(nuevaMarca[0], nuevaMarca[1]);
                    this.listaMarcas.push(marca)
                }
            }
        }
    }


    //Guardar Marca. 

    private saveMarcas() {

        fs.writeFileSync('datos/Marcas.txt', '');

        for (let i = 0; i < this.listaMarcas.length; i++) {
             let nuevaMarca = this.listaMarcas[i].toString();   //Tiene que pasar a string, en vehiculos venia el metodor guardar() de la clase abstracta

            fs.appendFileSync('datos/Marcas.txt', `${i === 0 ? '' : '\n'}${nuevaMarca} `);
        }
    }
}





