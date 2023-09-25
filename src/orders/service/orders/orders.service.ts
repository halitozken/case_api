import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campaign } from 'src/typeorm/entities/Campaign';
import { Order } from 'src/typeorm/entities/Order';
import { CreateOrderParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {

    constructor(@InjectRepository(Order) private orderRepository: Repository<Order>,
        @InjectRepository(Campaign) private campaignRepository: Repository<Campaign>) { }


    findOrders() {
        return this.orderRepository.find({
            relations: {
                products: true
            }
        })
    }

    async createOrder(orderDetails: CreateOrderParams) {

        var amount = 0;
        var discount_amount = 0;
        var shipping_price = 35;
        var campaign = [];

        const productsArray = orderDetails.products;

        // Stok Kontrolü
        productsArray.map(e => {
            if (e.stock_quantity === 0) {
                throw new Error("Ürün stokta bulunamadı: " + e.title)
            }
            amount = amount + e.list_price;
            discount_amount = discount_amount + e.list_price;
        })

        amount = amount + shipping_price;
        discount_amount = discount_amount + shipping_price;

        // Kargo Kontrolü
        if (amount >= 150) {
            shipping_price = 0;
            discount_amount = discount_amount - 35
        }


        let campaigns = await this.campaignRepository.find();
        campaign = campaigns;

        bestCampaign();

        // Kampanya Sorgulaması
        function bestCampaign() {
            let discount = [];

            campaign.map(e => {
                if (e.campaign_id === 1) {
                    discount.push(fivePercentDiscount());
                } if (e.campaign_id === 2) {
                    discount.push(giftBook());
                }
            })

            let maxDiscount = Math.max(...discount);
            if (maxDiscount > 1) {
                discount_amount = discount_amount - maxDiscount;
            }
        }

        // Sabahattin Ali'nin Roman kitaplarında 2 üründen 1 tanesi bedava
        function giftBook() {

            let discount_amount = null;
            let minPrice = Number.POSITIVE_INFINITY;
            var count = 0;

            for (let index = 0; index < productsArray.length; index++) {

                const product = productsArray[index];
                const author = productsArray[index].author;
                const listPrice = product.list_price;

                if (author === "Sabahattin Ali") {
                    count++;
                    if (count >= 2) {
                        if (listPrice < minPrice) {
                            minPrice = listPrice;
                        }
                    }
                }
            }
            discount_amount = minPrice;
            return discount_amount;
        }

        // 100 TL ve üzeri alışverişlerde sipariş toplamına %5 indirim
        function fivePercentDiscount() {
            let discount_amount = null;

            if (amount >= 100) {
                const discount = (amount * 5) / 100;
                discount_amount = discount;
            }

            return discount_amount;
        }

        const newOrder = this.orderRepository.create({ ...orderDetails, amount, discount_amount, shipping_price })

        return this.orderRepository.save(newOrder)
    }

    deleteOrder(track_id: number) {
        return this.orderRepository.delete({ track_id });

    }

}
