import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-product-show',
    templateUrl: './product-show.component.html',
    styleUrls: ['./product-show.component.css']
})

export class ProductShowComponent implements OnInit
{
    product: Product;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private productsService: ProductsService)
    {
        this.product = new Product();
        this.activatedRoute.params.subscribe(params => {
            if (!params.id)
            {
            }
            else
            {
                this.productsService.getProduct(params.id).subscribe(value => {
                    this.product = new Product();
                    this.product.id = params.id;
                    this.product.name = value.name;
                    this.product.price = value.price;
                    this.product.quantity = value.quantity;
                });
            }
        })
    }

    ngOnInit()
    {
    }

    onBackButtonClicked()
    {
        this.navigateToIndex();
    }

    navigateToIndex()
    {
        this.router.navigate(['/products']);
    }
}
