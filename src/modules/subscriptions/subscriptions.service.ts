import { Injectable } from '@nestjs/common';
import { Subscription } from '../../models/subscription.model';

@Injectable()
export class SubscriptionsService {
  async findAll() {
    return await Subscription.query().withGraphFetched('[user, payment]');
  }

  async findOne(id: number) {
    return await Subscription.query()
      .findById(id)
      .withGraphFetched('[user, payment]');
  }

  async findByUser(userId: number) {
    return await Subscription.query()
      .where('userId', userId)
      .withGraphFetched('[user, payment]');
  }

  async create(subscriptionData: Partial<Subscription>) {
    return await Subscription.query().insert(subscriptionData);
  }
}
