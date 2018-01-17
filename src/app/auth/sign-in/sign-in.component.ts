import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as CONSTANTS from '../../shared/constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor( private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.signInForm = new FormGroup({
      username: new FormControl( null, [Validators.required, Validators.pattern(CONSTANTS.USERNAME_REGEX) ] ),
      email: new FormControl( null, [Validators.required, Validators.pattern(CONSTANTS.EMAIL_REGEX) ] ),
      password: new FormControl( null, [Validators.required, Validators.minLength(8), Validators.pattern(CONSTANTS.PASSWORD_REGEX) ])
    });
  }

  onSubmit() {
    console.log('Form Submitted');
    this.router.navigate(['/']);
  }


}
