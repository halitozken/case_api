import { Campaign } from "src/typeorm/entities/Campaign";
import { Product } from "src/typeorm/entities/Product";
import { User } from "src/typeorm/entities/User";

export type CreateUserParams = {
    username: string;
    password: string;
}

export type UpdateUserParams = {
    username: string;
    password: string;
}

export type CreateProductParams = {
    id: number;
    title: string;
    category_id: number;
    category_title: string;
    author: string;
    list_price: number;
    stock_quantity: number;
}

export type CreateOrderParams = {
    track_id: number;
    username: User;
    products: Product[];
}

export type CreateCampaignParams = {
    campaign_name: string
}