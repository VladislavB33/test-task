import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public name: string;

  @IsString()
  public lastName: string;

  @IsString()
  public avatar: string;

  @IsString()
  public gender: 'male' | 'female';
}
