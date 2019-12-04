import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { PRODUCTS } from '../mock-products';

@Component({
    selector: 'app-product-index',
    templateUrl: './product-index.component.html',
    styleUrls: ['./product-index.component.css']
})

export class ProductIndexComponent implements OnInit
{
    products: Product[];

    constructor()
    {
        this.products = PRODUCTS;
    }

    ngOnInit()
    {
    }
}
