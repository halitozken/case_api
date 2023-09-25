import { Module } from '@nestjs/common';
import { ProductsService } from './service/products/products.service';
import { ProductsController } from './controllers/products/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/typeorm/entities/Product';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule { }
