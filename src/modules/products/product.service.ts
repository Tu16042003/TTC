import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/model/product.model';

@Injectable()
export class ProductService {

    private products: Product[] = [
        {
            id: 1,
            categoryId: 1,
            productName: "Iphone 12",
            price: 100
        },
        {
            id: 2,
            categoryId: 2,
            productName: "Iphone 13",
            price: 200
        }

    ];
    getProducts(): Product[] {
        return this.products;
    }

    createProduct(productDto: ProductDto): Product {
        const product: Product = {
            id: this.products.length + 1,
            ...productDto,
        }
        this.products.push(product);
        return product;
    }

    getProductById(id: number): Product {
        return this.products.find(item => item.id === Number(id));
    }

    updateProductById(productDto: ProductDto, id: number): Product {
        const index = this.products.findIndex(item => item.id === Number(id));
        this.products[index] = {
            ...this.products[index],
            ...productDto
        }
        // this.products[index].categoryId = productDto.categoryId;
        return this.products[index];
    }

    deleteProductById(id: number): boolean {
        const index = this.products.findIndex(item => item.id === Number(id));
        if (index !== -1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }

}