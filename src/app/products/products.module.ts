import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './products-routing.module';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductShowComponent } from './product-show/product-show.component';

@NgModule({
    declarations: [
        ProductIndexComponent,
        ProductShowComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutingModule
    ]
})

export class ProductModule { }
