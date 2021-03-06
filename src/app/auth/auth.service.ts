import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SpinnerService } from '../spinner.service';

@Injectable()
export class AuthService {

    token: string;

    constructor( private router: Router,
                private spinnerService: SpinnerService) {}

    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            (response) => {
                console.log('Sign Up Success');
                this.setToken();
                this.showSpinner();
                this.router.navigate(['/']);
            }
        )
        .catch(
            error => console.log(error)
        );
    }

    signInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            (response) => {
                console.log('Sign In Success');
                this.setToken();
                this.showSpinner();
                this.router.navigate(['/']);
            }
        )
        .catch(
            error => console.log(error)
        );
    }

    logOutUser() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }

    setToken() {
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => {
                this.token = token;
            }
        );
    }

    isLoggedIn() {
        return this.token != null;
    }

    showSpinner() {
        this.spinnerService.startSpinner();
    }

}
