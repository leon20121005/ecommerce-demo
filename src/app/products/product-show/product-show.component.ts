import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../product';
import { PRODUCTS } from '../mock-products';

@Component({
    selector: 'app-product-show',
    templateUrl: './product-show.component.html',
    styleUrls: ['./product-show.component.css']
})

export class ProductShowComponent implements OnInit
{
    product: Product;

    constructor(private activatedRoute: ActivatedRoute, private router: Router)
    {
        this.activatedRoute.params.subscribe(params => {
            if (!params.id)
            {
            }
            else
            {
                this.product = PRODUCTS[params.id];
            }
        })
    }

    ngOnInit()
    {
    }

    goToIndex()
    {
        this.router.navigate(['/products']);
    }
}
