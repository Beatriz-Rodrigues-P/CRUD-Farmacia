import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";

@Controller("/categorias")
export class CategoriaController{
    constructor(private readonly categoriaService:CategoriaService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll():Promise<Categoria[]>{
    return this.categoriaService.findAll()
    }

    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findByID(@Param("id")id:number):Promise<Categoria>{
    return this.categoriaService.findByID(id)
    }

    @Get("/secao/:secao")
    @HttpCode(HttpStatus.OK)
    findBySecao(@Param("secao")secao:string):Promise<Categoria[]>{
    return this.categoriaService.findBySecao(secao)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    post(@Body()categoria:Categoria):Promise<Categoria>{
    return this.categoriaService.create(categoria)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    put(@Body()categoria:Categoria): Promise<Categoria>{
    return this.categoriaService.update(categoria)
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param("id", ParseIntPipe)id:number){
    return this.categoriaService.delete(id)
    }

}