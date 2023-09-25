import { Campaign } from "src/typeorm/entities/Campaign";
import { Product } from "src/typeorm/entities/Product";
import { User } from "src/typeorm/entities/User";

export class CreateOrderDto {
    track_id: number;
    username: User;
    products: Product[];
}