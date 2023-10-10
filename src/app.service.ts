import { Injectable, Logger } from '@nestjs/common';
import { Demo, Output, Record } from './classes/classes';
import { mapper } from './mappings/mapper';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getJson(records: Record[]): Output {    

    const outputDto = mapper.map(records["Records"][0], Record, Output);

    this.logger.log('outputDto...');
    this.logger.log(outputDto.emisor);
    return outputDto;
  }
}
