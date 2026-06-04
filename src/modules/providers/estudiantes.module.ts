import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from '../../modules/entities/estudiante.entity';
import { EstudiantesService } from '../../modules/services/estudiantes.service';
import { EstudiantesController } from '../../modules/controllers/estudiantes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante])],
  providers: [EstudiantesService],
  controllers: [EstudiantesController],
  exports: [EstudiantesService, TypeOrmModule],
})
export class EstudiantesModule {}
