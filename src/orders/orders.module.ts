import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders/orders.controller';
import { OrdersService } from './service/orders/orders.service';
import { Order } from 'src/typeorm/entities/Order';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from 'src/typeorm/entities/Campaign';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), TypeOrmModule.forFeature([Campaign])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule { }
