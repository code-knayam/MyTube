import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as CONSTANTS from '../../shared/constants';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor( private authService: AuthService) { }

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
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    this.authService.signUpUser(email, password);
  }

}
