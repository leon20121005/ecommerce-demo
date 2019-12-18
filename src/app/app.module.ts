import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { firebaseConfig } from "src/environments/config";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './products/products.module';
import { ProductsService } from './products/products.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AppRoutingModule,
        ProductModule
    ],
    providers: [ProductsService],
    bootstrap: [AppComponent]
})

export class AppModule { }
