import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { firebaseConfig } from 'src/environments/config';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SessionNewComponent } from './sessions/session-new.component';
import { ProductsModule } from './products/products.module';
import { SessionsService } from './sessions/sessions.service';
import { AuthenticationService } from './authentication.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SessionNewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AppRoutingModule,
        ProductsModule
    ],
    providers: [SessionsService, AuthenticationService],
    bootstrap: [AppComponent]
})

export class AppModule
{
}
