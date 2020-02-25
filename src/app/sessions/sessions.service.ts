import { Injectable } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

@Injectable()
export class SessionsService
{
    isSignedIn: boolean;

    constructor(private authentication: AuthenticationService)
    {
        this.authentication.state.subscribe(state => {
            if (state)
            {
                this.isSignedIn = true;
            }
            else
            {
                this.isSignedIn = false;
            }
        });
    }

    createSession(email: string, password: string): Promise<any>
    {
        return this.authentication.signIn(email, password);
    }

    deleteSession(): Promise<any>
    {
        return this.authentication.signOut();
    }
}
