import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  createOrder(order): any[] {
    return [{ id: 1 }];
  }
  getOrder(id: number): any {
    return { id };
  }
}
