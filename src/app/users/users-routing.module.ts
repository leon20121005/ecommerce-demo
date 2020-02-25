import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserIndexComponent } from './user-index/user-index.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserShowComponent } from './user-show/user-show.component';

const userRoutes: Routes = [
    { path: '', component: UserIndexComponent },
    { path: 'users/new', component: UserNewComponent },
    { path: 'users/:id', component: UserShowComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class UsersRoutingModule
{
}
