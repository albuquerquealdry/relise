import { Injectable } from '@nestjs/common';
import {CheckoutRepository} from '../repository/checkout.repository'
import { CreateCheckoutDto } from '../dto/create-checkout.dto';
import { UpdateCheckoutDto } from '../dto/update-checkout.dto';
const searchData = require('../scripts/checkout.validation')

@Injectable()
export class CheckoutService {
  constructor(private readonly checkoutRepository : CheckoutRepository){}
  create(createCheckoutDto: CreateCheckoutDto) {
    return 'This action adds a new checkout';
  }

  findAll() {
    //return this.checkoutRepository.getAll()
  }

  findOne(id: string) {
    //return this.checkoutRepository.getOne(0)
  }

  async update(id: string, updateCheckoutDto: UpdateCheckoutDto) {
    let reqNum = 0
    while (true){
        let reqCalc = reqNum +1
        reqNum = reqCalc
        let data = await searchData(reqNum)
        let {hour} = data
        let {numberP} = data
        let timeStamp = new Date().getTime()
        let calc = timeStamp - hour
        console.log(hour)

        if(calc >= 4864000){
          let status = 'Seu pedido foi enviado a uma hora'
          this.checkoutRepository.checkStatus(numberP, status)
        }
        if(calc >= 58368000) {
          let status = 'Seu pedido foi enviado a 12 horas'
          this.checkoutRepository.checkStatus(numberP, status)
        }
        if(calc >= 116736000) {
          let status = 'Seu pedido foi enviado a 1 dia'
          this.checkoutRepository.checkStatus(numberP, status)
        }
        else {
          let status = 'Enviado a transportadora'
          this.checkoutRepository.checkStatus(numberP, status)
        }
        }
      }
  
  remove(id: string) {
    return `This action removes a #${id} checkout`;
  }
}
