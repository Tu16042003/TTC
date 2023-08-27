import {IsNotEmpty, MinLength} from 'class-validator';  

export class ProductDto {

    @IsNotEmpty({message: 'CategoryId must be not empty'})
    categoryId?: number;

    @MinLength(2, {message: 'ProductName must be at least 2 characters'})
    productName?: string;

    @IsNotEmpty({message: 'Price must be not empty'})
    price?: number;
}