import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event as RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading = true;

  constructor(private router: Router) {
    router.events.subscribe(
      (event: RouterEvent) => {
        this.navigationInterceptor(event);
      }
    );
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
      window.scrollTo(0, 0);
    }
    if (event instanceof NavigationCancel || event instanceof NavigationError || event instanceof NavigationEnd) {
      this.loading = false;
    }
  }

}
