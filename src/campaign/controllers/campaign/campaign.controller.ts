import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCampaignDto } from 'src/campaign/dtos/CreateCampaign.dto';
import { CampaignService } from 'src/campaign/service/campaign/campaign.service';

@Controller('campaign')
export class CampaignController {

    constructor(private campaignService: CampaignService) { }

    @Get()
    getCampaigns() {
        return this.campaignService.findCampaigns();
    }

    @Post()
    createCampaign(@Body() createCampaignDto: CreateCampaignDto) {
        return this.campaignService.createCampaign(createCampaignDto)
    }
}
