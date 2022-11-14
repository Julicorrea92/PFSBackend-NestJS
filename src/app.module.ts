import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MarcaController } from './marca/marca.controller';
import { MarcaService } from './marca/marca.service';


@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') })
  ],
  controllers: [AppController, MarcaController],
  providers: [AppService, MarcaService],
  
})
export class AppModule {}
