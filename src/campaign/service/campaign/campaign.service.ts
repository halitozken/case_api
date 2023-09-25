import { Get, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campaign } from 'src/typeorm/entities/Campaign';
import { CreateCampaignParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class CampaignService {

    constructor(@InjectRepository(Campaign) private campaignRepository: Repository<Campaign>) { }

    @Get()
    findCampaigns() {
        return this.campaignRepository.find();
    }

    @Post()
    createCampaign(campaignDetails: CreateCampaignParams) {
        const newCampaign = this.campaignRepository.create({ ...campaignDetails })
        return this.campaignRepository.save(newCampaign);
    }

}
