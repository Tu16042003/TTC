import { Controller, Get,Post ,Put,Delete,Param, Body, ValidationPipe} from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Product } from 'src/model/product.model';
import { ProductDto } from 'src/dto/product.dto';

@Controller('products')
export class ProductController {
    
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts(): ResponseData<Product[]>{
        try {
            return new ResponseData<Product[]>(this.productService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
        
    }

    @Post()
    createProduct(@Body(new ValidationPipe()) productDto: ProductDto): ResponseData<ProductDto>{
        try {
            return new ResponseData<ProductDto>(this.productService.createProduct(productDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<ProductDto>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Get('/:id')
    getProductById(@Param('id') id: number): ResponseData<Product>{
        try {
            return new ResponseData<Product>(this.productService.getProductById(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Put('/:id')
    updateProductById(@Body(new ValidationPipe()) productDto: ProductDto, @Param('id') id: number): ResponseData<ProductDto>{
        try {
            return new ResponseData<Product>(this.productService.updateProductById(productDto, id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Delete('/:id')
    deleteProductById(@Param('id') id: number): ResponseData<Boolean>{
        try {
            return new ResponseData<Boolean>(this.productService.deleteProductById(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Boolean> (null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}