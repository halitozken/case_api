import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/products/dtos/createProduct.dto';
import { ProductsService } from 'src/products/service/products/products.service';

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) { }

    @Get()
    getProducts() {
        return this.productService.findProducts();
    }

    @Post()
    createUser(@Body() createProductDto: CreateProductDto) {
        return this.productService.createProduct(createProductDto)
    }
}
