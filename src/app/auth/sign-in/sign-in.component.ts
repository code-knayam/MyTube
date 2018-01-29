import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as CONSTANTS from '../../shared/constants';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.signInForm = new FormGroup({
      email: new FormControl( null, [Validators.required, Validators.pattern(CONSTANTS.EMAIL_REGEX) ] ),
      password: new FormControl( null, [Validators.required ])
    });
  }

  onSubmit() {
    console.log('Form Submitted');
    const email = this.signInForm.value.email;
    const password = this.signInForm.value.password;
    this.authService.signInUser(email, password);
  }


}
