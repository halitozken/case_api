import { Module } from '@nestjs/common';
import { CampaignController } from './controllers/campaign/campaign.controller';
import { CampaignService } from './service/campaign/campaign.service';
import { Campaign } from 'src/typeorm/entities/Campaign';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign])],
  controllers: [CampaignController],
  providers: [CampaignService]
})
export class CampaignModule { }
