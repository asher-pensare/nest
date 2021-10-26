import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Post{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar'})
    nombre: string;
    @Column({type: 'varchar'})
    client: string;
    @Column({type: 'varchar'})
    requestedBy: string;
    @CreateDateColumn({type:'timestamp'})
    requestDate: Date;
    @CreateDateColumn()
    completionDate: Date;
    @Column({type: 'int'})
    hourss: number;
}