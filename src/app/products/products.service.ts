import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Product } from './product';

@Injectable()
export class ProductsService
{
    constructor(private database: AngularFirestore)
    {
    }

    createProduct(product: Product): Promise<any>
    {
        return this.database.collection<Product>('products').add(JSON.parse(JSON.stringify(product)));
    }

    getProducts(): Observable<any>
    {
        return this.database.collection<Product>('products').snapshotChanges();
    }

    getProduct(id: string): Observable<any>
    {
        return this.database.doc<Product>('products/' + id).valueChanges();
    }

    deleteProduct(id: string): Promise<any>
    {
        return this.database.doc<Product>('products/' + id).delete();
    }
}
