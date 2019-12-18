import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductShowComponent } from './product-show/product-show.component';

const productRoutes: Routes = [
    { path: '', component: ProductIndexComponent },
    { path: 'products/new', component: ProductNewComponent },
    { path: 'products/:id', component: ProductShowComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductsRoutingModule { }
