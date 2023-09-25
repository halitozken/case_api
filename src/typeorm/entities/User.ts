import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { Order } from './Order'


@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number

    @Column({ unique: true })
    username: string

    @Column()
    password: string

    @OneToMany(() => Order, order => order.username)
    order: Order

}

