import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import config from '@app/ormconfig';
import { TagModule } from '@app/tag/tag.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(config), TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
