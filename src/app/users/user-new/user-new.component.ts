import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user';
import { UsersService } from '../users.service';
import { AuthenticationService } from '../../authentication.service';
import { SessionsService } from '../../sessions/sessions.service';

@Component({
    selector: 'app-user-new',
    templateUrl: './user-new.component.html',
    styleUrls: ['./user-new.component.css']
})

export class UserNewComponent implements OnInit
{
    form : FormGroup

    constructor(private router: Router,
                private usersService: UsersService,
                private authenticationService: AuthenticationService,
                private sessionsService: SessionsService)
    {
    }

    ngOnInit()
    {
        this.form = new FormGroup({
            'email': new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            'password': new FormControl('', [
                Validators.required,
                Validators.minLength(6)
            ]),
            'confirmPassword': new FormControl('', [
                Validators.required,
                Validators.minLength(6)
            ])
        }, {
            validators: this.areValuesEqual
        });
    }

    areValuesEqual(formGroup: FormGroup)
    {
        const password = formGroup.get('password').value;
        const confirmPassword = formGroup.get('confirmPassword').value;
        if (password == confirmPassword)
        {
            return null;
        }
        return { 'areValuesEqual': false };
    }

    onSubmitButtonClicked()
    {
        const user = new User();
        user.email = this.form.value.email;
        if (this.form.valid)
        {
            this.usersService.createUser(user).then(() => {
                this.authenticationService.signUp(user.email, this.form.value.password).then(() => {
                    this.sessionsService.createSession(user.email, this.form.value.password).then(userCredential => {
                        console.log(userCredential);
                        this.navigateToHome();
                    }).catch(error => {
                        console.log(error);
                    });
                }).catch(error => {
                    console.log(error);
                });
            }).catch(error => {
                console.log(error);
            });
        }
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
