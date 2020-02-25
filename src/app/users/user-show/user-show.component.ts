import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
    selector: 'app-user-show',
    templateUrl: './user-show.component.html',
    styleUrls: ['./user-show.component.css']
})

export class UserShowComponent implements OnInit
{
    user: User;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private usersService: UsersService)
    {
        this.user = new User();
        this.activatedRoute.params.subscribe(params => {
            if (!params.id)
            {
            }
            else
            {
                this.usersService.getUser(params.id).subscribe(value => {
                    this.user = new User();
                    this.user.id = params.id,
                    this.user.name = value.name,
                    this.user.email = value.email,
                    this.user.phone = value.phone,
                    this.user.isAdmin = value.isAdmin
                });
            }
        })
    }

    ngOnInit()
    {
    }

    onBackButtonClicked()
    {
        this.navigateToIndex();
    }

    navigateToIndex()
    {
        this.router.navigate(['/users']);
    }
}
