import { Injectable } from '@nestjs/common';
import { Payment } from '../../models/payment.model';

@Injectable()
export class PaymentsService {
  async findAll() {
    return await Payment.query().withGraphFetched('user');
  }

  async findOne(id: string) {
    return await Payment.query().findById(id).withGraphFetched('user');
  }

  async findByUser(userId: number) {
    return await Payment.query()
      .where('userId', userId)
      .withGraphFetched('user');
  }

  async create(paymentData: Partial<Payment>) {
    return await Payment.query().insert(paymentData);
  }

  async updateStatus(id: string, status: 'SUCCESS' | 'FAILED' | 'PENDING') {
    return await Payment.query().findById(id).patch({ status });
  }
}
