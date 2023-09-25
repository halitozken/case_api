import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateOrderDto } from 'src/orders/dtos/CreateOrder.dto';
import { OrdersService } from 'src/orders/service/orders/orders.service';

@Controller('orders')
export class OrdersController {

    constructor(private orderService: OrdersService) { }

    @Get()
    getOrders() {
        return this.orderService.findOrders();
    }

    @Post()
    createOrder(@Body() createOrderDto: CreateOrderDto) {
        return this.orderService.createOrder(createOrderDto)
    }

    @Delete(":track_id")
    async deleteOrder(@Param("track_id", ParseIntPipe) track_id: number) {
        await this.orderService.deleteOrder(track_id)
    }


}
