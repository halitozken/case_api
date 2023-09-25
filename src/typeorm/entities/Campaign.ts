import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order";


@Entity({ name: "campaigns" })
export class Campaign {

    @PrimaryGeneratedColumn()
    campaign_id: number

    @Column()
    campaign_name: string

    @ManyToMany(() => Order, order => order.campaign)
    @JoinTable()
    order: Order

}