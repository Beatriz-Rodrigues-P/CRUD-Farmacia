import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";

@Controller("/produtos")
export class ProdutoController{

    constructor(
        private readonly produtoService:ProdutoService
    ){}
    
    @Get()
    @HttpCode(HttpStatus.OK)
    findall():Promise<Produto[]>{
        return this.produtoService.findAll();
    }

    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findByID(@Param("id", ParseIntPipe)id:number):Promise<Produto>{
        return this.produtoService.findByID(id)
    }

    @Get("/item/:item")
    @HttpCode(HttpStatus.OK)
    findByItem(@Param("item")item:string):Promise<Produto[]>{
        return this.produtoService.findByItem(item)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body()produto:Produto):Promise<Produto>{
        return this.produtoService.create(produto)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body()produto:Produto):Promise<Produto>{
        return this.produtoService.update(produto)
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.OK)
    delete(@Param("id", ParseIntPipe)id:number){
        return this.produtoService.delete(id)
    }

}