import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Estudiante } from '../entities/estudiante.entity';
import { CreateEstudianteDto } from '../dto/create-estudiante.dto';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private estudiantesRepository: Repository<Estudiante>,
  ) {}

  async create(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    const estudianteData: DeepPartial<Estudiante> = createEstudianteDto;
    const estudiante = this.estudiantesRepository.create(estudianteData);
    return this.estudiantesRepository.save(estudiante);
  }

  async findAll(): Promise<Estudiante[]> {
    return this.estudiantesRepository.find();
  }

  async findOne(id: number): Promise<Estudiante> {
    const estudiante = await this.estudiantesRepository.findOne({ where: { id } });
    if (!estudiante) {
      throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
    }
    return estudiante;
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.estudiantesRepository.delete(id);
  }
}
