import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService
{
    authenticationState: Observable<firebase.User>;

    constructor(private authentication: AngularFireAuth)
    {
        this.authenticationState = this.authentication.authState;
    }

    signUp(email: string, password: string): Promise<any>
    {
        return this.authentication.auth.createUserWithEmailAndPassword(email, password);
    }

    signIn(email: string, password: string): Promise<any>
    {
        return this.authentication.auth.signInWithEmailAndPassword(email, password);
    }

    signOut(): Promise<any>
    {
        return this.authentication.auth.signOut();
    }
}
