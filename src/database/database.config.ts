import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const dataBaseConfig: SequelizeModuleOptions = {
    dialect: "sqlite",
    storage: "db/database.sqlite",
    autoLoadModels: true,
};