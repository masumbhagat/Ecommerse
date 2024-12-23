import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { OrderStatus } from 'src/orders/enum/order-status.enum';

export class UpdateOrderStatusDto {
  @IsNotEmpty()
  @IsString()
  @IsIn([OrderStatus.SHIPPED, OrderStatus.DELIVERED])
  status: OrderStatus;
}