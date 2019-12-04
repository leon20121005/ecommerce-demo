import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductShowComponent } from './product-show/product-show.component';

const productRoutes: Routes = [
    { path: '', component: ProductIndexComponent },
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

export class ProductRoutingModule { }
