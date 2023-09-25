import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { Product } from './typeorm/entities/Product';
import { OrdersModule } from './orders/orders.module';
import { Order } from './typeorm/entities/Order';
import { Campaign } from './typeorm/entities/Campaign';
import { CampaignModule } from './campaign/campaign.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "case_db",
    entities: [User, Product, Order, Campaign],
    synchronize: true,
  }), UsersModule, ProductsModule, OrdersModule, CampaignModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
