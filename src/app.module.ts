import { Module } from '@nestjs/common';
import { CheckoutController } from './controller/checkout.controller';
import { CheckoutRepository } from './repository/checkout.repository';
import { CheckoutService } from './service/checkout.service';


@Module({
  imports: [],
  controllers: [CheckoutController],
  providers: [CheckoutService, CheckoutRepository],
})
export class AppModule {}
