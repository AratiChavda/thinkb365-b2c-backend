import { Module, OnModuleInit } from '@nestjs/common';
import { knex, Knex } from 'knex';
import { Model } from 'objection';
import knexConfig from './database/knex.config';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { OffersModule } from './modules/offers/offers.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';
import { UploadController } from './modules/upload/upload.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PaymentsModule } from './modules/payments/payments.module';
import { SubscriptionItemsModule } from './modules/subscription-items/subscription-items.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoryService } from './modules/category/category.service';
import { CategoryModule } from './modules/category/category.module';
import { BundleService } from './modules/bundle/bundle.service';
import { BundleModule } from './modules/bundle/bundle.module';
import { BundleProductModule } from './modules/bundle-product/bundle-product.module';
import { PromoCodeModule } from './modules/promo-code/promo-code.module';
import { AddonsModule } from './modules/addons/addons.module';
import { BrandModule } from './modules/brand/brand.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/',
    }),
    AuthModule,
    UsersModule,
    ProductsModule,
    OffersModule,
    SubscriptionsModule,
    PaymentsModule,
    SubscriptionItemsModule,
    BrandModule,
    CategoryModule,
    BundleModule,
    BundleProductModule,
    PromoCodeModule,
    AddonsModule,
  ],
  controllers: [UploadController],
  providers: [CategoryService, BundleService],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    const db: Knex = knex(knexConfig.development);
    Model.knex(db);
  }
}
