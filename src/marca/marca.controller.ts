import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('marca')
export class MarcaController {
    
    @Post()
    newMarca(@Body() Marca): string{
        return 'Marca creada';
    }

    @Get()
    getMarca(): string{
        return "Lista de Marcas";    
    }


    @Put()
    updateMarca(): string{
        return 'Datos actualizados';
    }

    @Delete()
    deleteMarca(): string{
        return 'Registro eliminado'
    }
}