import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as CONSTANTS from '../../shared/constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor( private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.signUpForm = new FormGroup({
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
