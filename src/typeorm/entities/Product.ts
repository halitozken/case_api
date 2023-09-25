import { Column, Double, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Order } from "./Order";

@Entity({ name: "products" })
export class Product {

    @PrimaryColumn()
    product_id: number

    @Column()
    title: string

    @Column()
    category_id: number

    @Column()
    category_title: string

    @Column()
    author: string

    @Column()
    list_price: number

    @Column()
    stock_quantity: number

    @ManyToMany(() => Order, order => order.products)
    @JoinTable()
    order: Order
}