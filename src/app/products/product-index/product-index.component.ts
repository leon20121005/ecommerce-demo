import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-product-index',
    templateUrl: './product-index.component.html',
    styleUrls: ['./product-index.component.css']
})

export class ProductIndexComponent implements OnInit
{
    products: Product[];

    constructor(private productsService: ProductsService)
    {
        this.productsService.getProducts().subscribe(snapshot => {
            this.products = new Array<Product>();
            snapshot.forEach(action => {
                this.products.push({
                    id: action.payload.doc.id,
                    name: action.payload.doc.data().name,
                    price: action.payload.doc.data().price,
                    quantity: action.payload.doc.data().quantity
                });
            });
        });
    }

    ngOnInit()
    {
    }

    onDeleteButtonClicked(id: string)
    {
        this.productsService.deleteProduct(id);
    }
}
