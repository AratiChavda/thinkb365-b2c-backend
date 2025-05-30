import { Injectable, NotFoundException } from '@nestjs/common';
import { PaymentMethod } from '../../models/payment-methods.model';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';

@Injectable()
export class PaymentMethodsService {
  async findAll(userId: number) {
    return PaymentMethod.query().where('user_id', userId);
  }

  async findOne(id: number, userId: number) {
    const paymentMethod = await PaymentMethod.query()
      .where('id', id)
      .where('user_id', userId)
      .first();

    if (!paymentMethod) {
      throw new NotFoundException('Payment method not found');
    }

    return paymentMethod;
  }

  async create(userId: number, createDto: CreatePaymentMethodDto) {
    if (createDto.is_default) {
      await this.unsetDefaultPaymentMethods(userId);
    }

    return PaymentMethod.query().insert({
      ...createDto,
      user_id: userId,
    });
  }

  async update(id: number, userId: number, updateDto: UpdatePaymentMethodDto) {
    if (updateDto.is_default) {
      await this.unsetDefaultPaymentMethods(userId);
    }

    const paymentMethod = await PaymentMethod.query()
      .where('id', id)
      .where('user_id', userId)
      .patch(updateDto)
      .returning('*')
      .first();

    if (!paymentMethod) {
      throw new NotFoundException('Payment method not found');
    }

    return paymentMethod;
  }

  async remove(id: number, userId: number) {
    const deleted = await PaymentMethod.query()
      .where('id', id)
      .where('user_id', userId)
      .delete();

    if (!deleted) {
      throw new NotFoundException('Payment method not found');
    }
  }

  private async unsetDefaultPaymentMethods(userId: number) {
    await PaymentMethod.query()
      .where('user_id', userId)
      .where('is_default', true)
      .patch({ is_default: false });
  }
}
