import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { NumericTransformer } from "../../util/numerictransformer";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name:"tb_produtos"})
export class Produto{

    @PrimaryGeneratedColumn()
    id:number

    @IsNotEmpty()
    @Column({length:255, nullable:false})
    item:string

    @IsNotEmpty()
    @Column({length:5000})
    foto_item:string

    @IsNotEmpty()
    @Column({type: "date"})
    data_fabricacao:Date

    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces:2})
    @Column({type:"decimal", precision:10, scale:2, transformer: new NumericTransformer()
    })
    preco:number

    @ManyToOne(()=>Categoria, categoria=>categoria.produto,{
        onDelete:"CASCADE"
    })
    categoria:Categoria
}