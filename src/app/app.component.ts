import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event as RouterEvent } from '@angular/router';
import * as firebase from 'firebase';

import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
              private spinnerService: SpinnerService) {
    router.events.subscribe(
      (event: RouterEvent) => {
        this.navigationInterceptor(event);
      }
    );
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCaSqaT1Hsr06SM_mP59WJOw-ga-s5TFXE',
      authDomain: 'mytube-117fc.firebaseapp.com',
      databaseURL: 'https://mytube-117fc.firebaseio.com',
      projectId: 'mytube-117fc',
      storageBucket: 'mytube-117fc.appspot.com',
      messagingSenderId: '834546819176'
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.spinnerService.startSpinner();
      window.scrollTo(0, 0);
    }
    if (event instanceof NavigationCancel || event instanceof NavigationError || event instanceof NavigationEnd) {
      this.spinnerService.stopSpinner();
    }
  }

}
