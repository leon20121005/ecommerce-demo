import { Injectable } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

@Injectable()
export class SessionsService
{
    constructor(private authentication: AuthenticationService)
    {
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
