import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  createdAt: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  products: string;

  @Prop({ required: true })
  statusCode: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
