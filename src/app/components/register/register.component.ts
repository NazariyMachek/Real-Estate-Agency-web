import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            id: new Date(Date.now()).getMilliseconds(),
            firstName: ['', Validators.required],
            middleName: ['', Validators.required],
            lastName: ['', Validators.required],
            telephone: ['', Validators.required],
            email: ['', Validators.required],
            login: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            role: 3,
        });
    }

    // convenience getter for easy access to form fields
    // get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        console.log(this.registerForm.value);
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                (data: any) => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                (error: any) => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
