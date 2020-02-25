import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable()
export class UsersService
{
    constructor(private database: AngularFirestore)
    {
    }

    createUser(user: User): Promise<any>
    {
        return this.database.collection<User>('users').add(JSON.parse(JSON.stringify(user)));
    }

    getUsers(): Observable<any>
    {
        return this.database.collection<User>('users').snapshotChanges();
    }

    getUser(id: string): Observable<any>
    {
        return this.database.doc<User>('users/' + id).valueChanges();
    }

    deleteUser(id: string): Promise<any>
    {
        return this.database.doc<User>('users/' + id).delete();
    }
}
