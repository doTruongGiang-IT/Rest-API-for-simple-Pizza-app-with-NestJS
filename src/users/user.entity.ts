/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { IsNotEmpty, IsEmail } from "class-validator";
import { Orders } from "src/order/order.entity";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    username: string;

    @Column()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Column()
    @IsNotEmpty()
    password: string;

    @Column({default: ""})
    @IsNotEmpty()
    profile: string;

    @OneToMany(() => Orders, (order: Orders) => order.user)
    public orders: Orders[];
}