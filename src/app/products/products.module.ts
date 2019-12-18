import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './products-routing.module';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductsService } from './products.service';

@NgModule({
    declarations: [
        ProductIndexComponent,
        ProductNewComponent,
        ProductShowComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutingModule
    ],
    providers: [ProductsService]
})

export class ProductModule { }
