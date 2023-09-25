import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";
import { Campaign } from "./Campaign";

@Entity({ name: "orders" })
export class Order {

    @PrimaryGeneratedColumn()
    track_id: number

    @ManyToOne(() => User, user => user.order)
    @JoinColumn()
    username: User

    @ManyToMany(() => Product, product => product.order)
    @JoinTable()
    products: Product[]

    @Column({ default: "pending..." })
    status: string

    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updatedDate: Date

    @Column({ default: 35 })
    shipping_price: number

    @Column({ default: 0 })
    amount: number

    @Column({ default: 0 })
    discount_amount: number

    @ManyToMany(() => Campaign, campaign => campaign.order)
    @JoinTable()
    campaign: Campaign[]

}