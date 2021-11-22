import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckoutService } from '../service/checkout.service';
import { CreateCheckoutDto } from '../dto/create-checkout.dto';
import { UpdateCheckoutDto } from '../dto/update-checkout.dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}



  @Get()
  update() {
    return this.checkoutService.update();
  }
}
