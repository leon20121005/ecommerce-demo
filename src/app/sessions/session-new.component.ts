import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionsService } from './sessions.service';

@Component({
    selector: 'app-session-new',
    templateUrl: './session-new.component.html',
    styleUrls: ['./session-new.component.css']
})

export class SessionNewComponent implements OnInit
{
    email: string;
    password: string;
    errorMessage: string;

    constructor(private router: Router, private sessionsService: SessionsService)
    {
        this.email = '';
        this.password = '';
    }

    ngOnInit()
    {
    }

    onSubmitButtonClicked()
    {
        this.errorMessage = '';
        this.sessionsService.createSession(this.email, this.password).then(value => {
            console.log(value);
        }).catch((error) => {
            this.errorMessage = error;
        });
    }

    onBackButtonClicked()
    {
        this.navigateToHome();
    }

    navigateToHome()
    {
        this.router.navigate(['/']);
    }
}
