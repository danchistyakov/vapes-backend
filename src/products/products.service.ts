import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getGoods(): any[] {
    return [{ id: 1 }];
  }
  getGood(id: number): any {
    return { id };
  }
}
