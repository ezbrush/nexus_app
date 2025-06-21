export interface ProductAttributes {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    thumbnail: string;
}
export interface ProductCreationAttributes extends Omit<ProductAttributes, 'id'> {}