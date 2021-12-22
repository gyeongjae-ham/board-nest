import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mslfl4861!!',
  database: 'boardproject',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
