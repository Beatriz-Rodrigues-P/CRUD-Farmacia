import { IsNotEmpty } from "class-validator"
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity({name:"tb_categorias"})
export class Categoria{

    @PrimaryGeneratedColumn()
    id:number
    
    @IsNotEmpty()
    @Column({length:255, nullable:false})
    secao:string

    @IsNotEmpty()
    @Column({length:500, nullable:false})
    descricao:string

    // @OneToMany(() => Produto, (produto) => produto.categoria) produto: Produto[]
}
