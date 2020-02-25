import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UsersService } from './users.service';

@NgModule({
    declarations: [
        UserIndexComponent,
        UserNewComponent,
        UserShowComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UsersRoutingModule
    ],
    providers: [UsersService]
})

export class UsersModule
{
}
