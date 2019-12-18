import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-product-new',
    templateUrl: './product-new.component.html',
    styleUrls: ['./product-new.component.css']
})

export class ProductNewComponent implements OnInit
{
    product: Product;
    errorMessage: string;

    constructor(private router: Router, private productsService: ProductsService)
    {
        this.product = new Product();
    }

    ngOnInit()
    {
    }

    onSubmitButtonClicked()
    {
        this.errorMessage = '';
        if (!this.product.name)
        {
            this.errorMessage += '<br>' + 'please enter a name';
        }
        if (!this.product.price)
        {
            this.errorMessage += '<br>' + 'please enter a price';
        }
        if (!this.product.quantity)
        {
            this.errorMessage += '<br>' + 'please enter a quantity';
        }
        if (this.errorMessage == '')
        {
            this.productsService.createProduct(this.product).then(() => {
                this.navigateToIndex();
            });
        }
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
