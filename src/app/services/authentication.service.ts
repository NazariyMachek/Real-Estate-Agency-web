import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({ 
    providedIn: 'root' 
})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(login: string, password: string) {
        // let user: User = {
        //     id: 2,
        //     firstName: "Петро",
        //     middleName: "Петрович",
        //     lastName: "Петренко",
        //     telephone: "+38000000000",
        //     email: "example@example.com",
        //     login: "123",
        //     password: "123",
        //     role: 3,
        //   };
        // localStorage.setItem('currentUser', JSON.stringify(user));
        // this.currentUserSubject.next(user);
        // return user;
        return this.http.get<any>(environment.API_URL + `User/get/${login}/${password}`)
            .pipe(map(user => {
                if (user && user.id) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null!);
    }
}