import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, Min, IsNumber } from 'class-validator';

export class CreateEstudianteDto {
  @ApiProperty({ example: 'Andres Botina' })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  nombre: string;

  @ApiProperty({ example: 20 })
  @IsInt({ message: 'La edad debe ser un número entero' })
  @Min(0, { message: 'La edad debe ser mayor o igual a 0' })
  edad: number;

  @ApiProperty({
    example: 1124864792,
    description: 'Identificación del estudiante',
    default: 1124864792,
  })
  @IsNumber({}, { message: 'La identificación debe ser un número' })
  identificacion: number = 1124864792;
}
