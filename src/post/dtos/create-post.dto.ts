import { IsDate, IsInt, IsNumber, IsString } from "class-validator";


export class CreatePostDto{
    @IsString()
    nombre: string;
    @IsString()
    client: string;
    @IsString()
    requestedBy: string;
    @IsDate()
    requestDate: Date;
    @IsDate()
    completionDate: Date;
    @IsNumber()
    hourss: number;
}