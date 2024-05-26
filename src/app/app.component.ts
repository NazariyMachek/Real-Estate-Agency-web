import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';



@Component({ 
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
 })
export class AppComponent {
    currentUser?: User;
    showMenuEnabled: boolean = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationStart) {
                // Show progress spinner or progress bar
               this.showMenuEnabled = false;
            }
        });
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    showMenu() {
        this.showMenuEnabled = !this.showMenuEnabled;
    }

    goToProfilePage() {
        this.router.navigate(['/profile/' + this.currentUser?.id]);
    }

    goToEditPage() {
        this.router.navigate(['/edit/' + this.currentUser?.id]);
    }
}