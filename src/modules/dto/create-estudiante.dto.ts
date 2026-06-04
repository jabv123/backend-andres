import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';

export class CreateEstudianteDto {
  @ApiProperty({ example: 'Juan Pérez' })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  nombre: string;

  @ApiProperty({ example: 20 })
  @IsInt({ message: 'La edad debe ser un número entero' })
  @Min(0, { message: 'La edad debe ser mayor o igual a 0' })
  edad: number;
}
