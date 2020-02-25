import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
    selector: 'app-user-index',
    templateUrl: './user-index.component.html',
    styleUrls: ['./user-index.component.css']
})

export class UserIndexComponent implements OnInit
{
    users: User[];

    constructor(private usersService: UsersService)
    {
        this.usersService.getUsers().subscribe(snapshot => {
            this.users = new Array<User>();
            snapshot.forEach(action => {
                this.users.push({
                    id: action.payload.doc.id,
                    name: action.payload.doc.data().name,
                    email: action.payload.doc.data().email,
                    phone: action.payload.doc.data().phone,
                    isAdmin: action.payload.doc.data().isAdmin
                });
            });
        });
    }

    ngOnInit()
    {
    }

    onDeleteButtonClicked(id: string)
    {
        this.usersService.deleteUser(id);
    }
}
