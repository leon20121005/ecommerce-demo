import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionNewComponent } from './sessions/session-new.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule)
    },
    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule)
    },
    {
        path: 'login',
        component: SessionNewComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule
{
}
