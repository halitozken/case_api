import { Double } from "typeorm";

export class CreateProductDto {
    id: number;
    title: string;
    category_id: number;
    category_title: string;
    author: string;
    list_price: number;
    stock_quantity: number;
}