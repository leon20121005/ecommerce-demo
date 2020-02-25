import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionsService } from '../sessions/sessions.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit
{
    constructor(private router: Router, private sessionsService: SessionsService)
    {
    }

    ngOnInit()
    {
    }

    onSignOutButtonClicked()
    {
        this.sessionsService.deleteSession().then(() => {
            this.navigateToHome();
        }).catch(error => {
            console.log(error);
        });
    }

    navigateToHome()
    {
        this.router.navigate(['/']);
    }
}
