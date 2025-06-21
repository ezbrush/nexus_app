import { Column, Table, Model, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript';
import { ProductAttributes, ProductCreationAttributes } from '../interface/product.interface';

@Table({ tableName: 'product' })
export class Product extends Model<ProductAttributes,ProductCreationAttributes> {

    @PrimaryKey
    @AutoIncrement
    @Column
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    description: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: true,
    })
    price: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    image: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    thumbnail: string;
}