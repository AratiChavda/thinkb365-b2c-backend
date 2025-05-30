import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: 'pg-17e2af13-aratichavda31-d304.j.aivencloud.com',
      user: 'avnadmin',
      port: 24943,
      password: 'AVNS_AFlwgXrIdya9q7z0YYE',
      database: 'defaultdb',
      ssl: {
        rejectUnauthorized: false,
      },
    },
    migrations: {
      directory: './src/database/migrations',
    },
  },
};

export default config;
