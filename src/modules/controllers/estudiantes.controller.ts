import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { EstudiantesService } from '../services/estudiantes.service';
import { CreateEstudianteDto } from '../dto/create-estudiante.dto';

@ApiTags('Estudiantes')
@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear estudiante' })
  @ApiResponse({ status: 201, description: 'Estudiante creado exitosamente' })
  create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudiantesService.create(createEstudianteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar estudiantes' })
  findAll() {
    return this.estudiantesService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: string) {
    return this.estudiantesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudiantesService.remove(+id);
  }
}
